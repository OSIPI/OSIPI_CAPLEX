function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyURLToClip(ID) {
  let text = new URL(`#${ID}`, window.location).href
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  button.addEventListener('click', () => {
    copyURLToClip(button.closest('tr').querySelector('a').id)
    //If you move the id from anchor in second col to the button itself
    //copyURLToClip(button.id)
  })
})

// --- Search Enhancement: Abbreviation/Synonym Expansion & Fuzzy Suggestion ---
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input.md-search__input');
  if (!searchInput) return;

  // Create suggestion element
  let suggestionDiv = document.createElement('div');
  suggestionDiv.style.display = 'none';
  suggestionDiv.style.position = 'absolute';
  suggestionDiv.style.background = '#fffbe6';
  suggestionDiv.style.border = '1px solid #ffe066';
  suggestionDiv.style.padding = '4px 8px';
  suggestionDiv.style.marginTop = '2px';
  suggestionDiv.style.fontSize = '0.95em';
  suggestionDiv.style.cursor = 'pointer';
  suggestionDiv.style.zIndex = 1000;
  suggestionDiv.setAttribute('id', 'search-did-you-mean');
  searchInput.parentNode.style.position = 'relative';
  searchInput.parentNode.appendChild(suggestionDiv);

  fetch('assets/abbreviations.md')
    .then(response => response.text())
    .then(text => {
      const abbrMap = {};
      text.split('\n').forEach(line => {
        const match = line.match(/^\*\[(.+?)\]:\s+(.+)/);
        if (match) abbrMap[match[1].toLowerCase()] = match[2].toLowerCase();
      });
      function levenshtein(a, b) {
        const matrix = Array.from({length: a.length+1}, () => Array(b.length+1).fill(0));
        for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
        for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= a.length; i++) {
          for (let j = 1; j <= b.length; j++) {
            matrix[i][j] = Math.min(
              matrix[i-1][j] + 1,
              matrix[i][j-1] + 1,
              matrix[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)
            );
          }
        }
        return matrix[a.length][b.length];
      }
      searchInput.addEventListener('input', function(e) {
        const val = e.target.value.trim().toLowerCase();
        suggestionDiv.style.display = 'none';
        suggestionDiv.textContent = '';
        if (!val) return;
        if (abbrMap[val]) {
          e.target.value = val + ' ' + abbrMap[val];
        }
        const abbrs = Object.keys(abbrMap);
        let minDist = Infinity, closest = '';
        abbrs.forEach(abbr => {
          const dist = levenshtein(val, abbr);
          if (dist < minDist && dist <= 2) { minDist = dist; closest = abbr; }
        });
        if (closest && closest !== val) {
          suggestionDiv.textContent = `Did you mean: ${closest}?`;
          suggestionDiv.style.display = 'block';
          suggestionDiv.onclick = function() {
            searchInput.value = closest;
            suggestionDiv.style.display = 'none';
            searchInput.dispatchEvent(new Event('input'));
          };
        }
      });
      // Hide suggestion on blur
      searchInput.addEventListener('blur', function() {
        setTimeout(() => { suggestionDiv.style.display = 'none'; }, 200);
      });
    });
});
// --- End Search Enhancement ---

// --- Simple Did You Mean Suggestion Above Search Bar ---
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('input.md-search__input');
  if (!searchInput) return;

  // Create suggestion element above the search bar
  let didYouMeanBox = document.createElement('div');
  didYouMeanBox.className = 'did-you-mean-box';
  didYouMeanBox.style.display = 'none';
  didYouMeanBox.style.background = '#fffbe6';
  didYouMeanBox.style.border = '1px solid #ffe066';
  didYouMeanBox.style.padding = '6px 12px';
  didYouMeanBox.style.marginBottom = '8px';
  didYouMeanBox.style.fontSize = '1em';
  didYouMeanBox.style.cursor = 'pointer';
  didYouMeanBox.style.borderRadius = '4px';
  didYouMeanBox.style.maxWidth = '400px';
  didYouMeanBox.style.position = 'relative';
  // Insert above the search input
  searchInput.parentNode.insertBefore(didYouMeanBox, searchInput);

  fetch('includes/abbreviations.md')
    .then(response => response.text())
    .then(text => {
      const abbrMap = {};
      text.split('\n').forEach(line => {
        const match = line.match(/^\*\[(.+?)\]:\s+(.+)/);
        if (match) abbrMap[match[1].toLowerCase()] = match[2].toLowerCase();
      });
      function levenshtein(a, b) {
        const matrix = Array.from({length: a.length+1}, () => Array(b.length+1).fill(0));
        for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
        for (let j = 0; j <= b.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= a.length; i++) {
          for (let j = 1; j <= b.length; j++) {
            matrix[i][j] = Math.min(
              matrix[i-1][j] + 1,
              matrix[i][j-1] + 1,
              matrix[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)
            );
          }
        }
        return matrix[a.length][b.length];
      }
      searchInput.addEventListener('input', function(e) {
        const val = e.target.value.trim().toLowerCase();
        didYouMeanBox.style.display = 'none';
        didYouMeanBox.textContent = '';
        if (!val) return;
        const abbrs = Object.keys(abbrMap);
        let minDist = Infinity, closest = '';
        abbrs.forEach(abbr => {
          const dist = levenshtein(val, abbr);
          if (dist < minDist && dist <= 2) { minDist = dist; closest = abbr; }
        });
        if (closest && closest !== val) {
          didYouMeanBox.textContent = `Did you mean: ${closest}? (Click to search)`;
          didYouMeanBox.style.display = 'block';
          didYouMeanBox.onclick = function() {
            searchInput.value = closest;
            searchInput.dispatchEvent(new Event('input'));
            didYouMeanBox.style.display = 'none';
          };
        }
      });
      // Hide suggestion on blur
      searchInput.addEventListener('blur', function() {
        setTimeout(() => { didYouMeanBox.style.display = 'none'; }, 200);
      });
    });
});
// --- End Simple Did You Mean Suggestion ---

// --- Search Result Prioritization for Table Rows and Notation Matching ---
function normalizeNotation(str) {
  // Remove HTML tags, sub/superscripts, and make lowercase
  if (!str) return '';
  // Remove LaTeX $...$ and HTML tags
  str = str.replace(/\$[^$]*\$/g, '');
  str = str.replace(/<[^>]+>/g, '');
  // Remove subscript/superscript unicode (optional, for robustness)
  str = str.replace(/[\u2070-\u209F]/g, '');
  // Remove non-alphanumeric
  str = str.replace(/[^a-zA-Z0-9]/g, '');
  return str.toLowerCase();
}

function isTableRowResult(result) {
  // Heuristic: Table rows have OSIPI code patterns and Notation fields
  // e.g., location includes 'quantities', 'perfusionModels', 'perfusionProcesses', 'generalPurposeProcesses', etc.
  if (!result || !result.location) return false;
  return /quantities|perfusionModels|perfusionProcesses|generalPurposeProcesses|derivedProcesses/.test(result.location);
}

function extractNotation(result) {
  // Try to extract Notation from the summary or text
  if (!result || !result.summary) return '';
  // Look for Notation: ... or | ... | ... | Notation | ... |
  // Try to extract the Notation column from a markdown table row
  const notationMatch = result.summary.match(/\|[^|]*\|[^|]*\|[^|]*\|([^|]*)\|/);
  if (notationMatch && notationMatch[1]) {
    return notationMatch[1].trim();
  }
  // Fallback: look for Notation: ...
  const altMatch = result.summary.match(/Notation:?\s*([^|\n]+)/i);
  if (altMatch && altMatch[1]) {
    return altMatch[1].trim();
  }
  return '';
}

// Patch displayResults to prioritize table rows and Notation matches
const origDisplayResults = window.displayResults || displayResults;
window.displayResults = function(results) {
  const searchInput = document.querySelector('input.md-search__input') || document.getElementById('mkdocs-search-query');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const normQuery = normalizeNotation(query);

  // Partition results
  let tableMatches = [], notationMatches = [], otherResults = [];
  results.forEach(result => {
    if (isTableRowResult(result)) {
      // Check OSIPI name or Notation match
      const notation = extractNotation(result);
      const normNotation = normalizeNotation(notation);
      // Also check title for OSIPI name match
      const normTitle = normalizeNotation(result.title);
      if (normNotation && normQuery && normNotation.includes(normQuery)) {
        notationMatches.push(result);
      } else if (normTitle && normQuery && normTitle.includes(normQuery)) {
        notationMatches.push(result);
      } else {
        tableMatches.push(result);
      }
    } else {
      otherResults.push(result);
    }
  });
  // Order: Notation matches > Table matches > Other
  const finalResults = notationMatches.concat(tableMatches, otherResults);
  origDisplayResults(finalResults);
};
// --- End Search Result Prioritization ---

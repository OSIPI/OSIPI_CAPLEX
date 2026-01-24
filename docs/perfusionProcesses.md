
# <a id="Section P"></a> Section P: Perfusion Processes


## <a id="Native R1 estimation"></a> Native R1 estimation
The processes in this section describe commonly used methods to estimate the native relaxation rate *R<sub>10</sub>* from a given MR signal data set.
The resulting native relaxation rate can be used e.g. as input for the conversion from an electromagnetic property to indicator concentration.

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.NR1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="EstimateR10"></a> Estimate native  *R<sub>1</sub>*  | -- | Estimate *R<sub>10</sub>* | This process returns the native *R<sub>1</sub>* relaxation rate *R<sub>10</sub>* derived using a given native *R<sub>1</sub>*  estimation method. <br /> **Input**: <br /> Native *R<sub>1</sub>* estimation method (select from [Native *R<sub>1</sub>*-estimation methods](#Native R1 estimation methods)) <br /> **Output:** <br /> [*R<sub>10</sub>* (Q.EL1.002)](quantities.md#R10)| -- | 

### <a id="Native R1 estimation methods"></a> Native *R<sub>1</sub>*-estimation methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.NR2.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="FixedR10"></a> Fixed Value | -- | -- | A fixed value of *R<sub>10</sub>*, e.g. a literature value, rather than a measured value is assumed. <br /> **Input:** <br /> [Fixed *R<sub>10</sub>*-value (Q.NR1.001)](quantities.md#R10_fixed) <br /> **Output**: <br />  [*R<sub>10</sub>* (Q.EL1.002)](quantities.md#R10) | Haacke et al. 2007 |
| P.NR2.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="VFA"></a> Variable Flip Angle | -- | VFA| This process estimates the native longitudinal relaxation rate *R<sub>10</sub>* (and signal scaling factor *S<sub>0</sub>*) from the MR signal measured at multiple flip angles by inverting the [SPGR model (M.SM2.002)](perfusionModels.md#SPGR model) according to a specified inversion method. <br /> **Input**: <br /> Inversion method (select from [Inversion methods](generalPurposeProcesses.md#Inversion methods)) with <br />  [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)] = [[Signal (Q.MS1.001)](quantities.md#S), [Prescribed excitatory flip angle (Q.MS1.007)](quantities.md#Flip angle)],  <br />  [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = [SPGR model (M.SM2.002)](perfusionModels.md#SPGR model) <br /> **Output:** <br /> [*R<sub>10</sub>* (Q.EL1.002)](quantities.md#R10), <br/> [*S<sub>0</sub>* (Q.MS1.010)](quantities.md#S_0) | Wang et al. 1987|
| P.NR2.003 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Multi-delay_SR"></a> Multi-delay Saturation Recovery | -- | SR | This process estimates the native longitudinal relaxation rate *R<sub>10</sub>* (and signal scaling factor *S<sub>0</sub>*) from the MR signal measured at multiple prepulse delays by inverting the saturation recovery GRE signal model according to a specified inversion method. <br /> **Input:** <br /> Inversion method (select from [Inversion methods](generalPurposeProcesses.md#Inversion methods)) with  <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)] = [[Signal (Q.MS1.001)](quantities.md#S), [Prepulse delay time (Q.MS1.008)](quantities.md#PD)], <br/> [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = an SR model from [MR signal models](perfusionModels.md#MR signal models) <br/> **Output:** <br /> [*R<sub>10</sub>* (Q.EL1.002)](quantities.md#R10), <br/> [*S<sub>0</sub>* (Q.MS1.010)](quantities.md#S_0) | Parker et al. 2000 |
| P.NR2.004 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Multi-delay_IR"></a> Multi-delay Inversion Recovery | -- | IR | This process estimates the native longitudinal relaxation rate *R<sub>10</sub>* (and signal scaling factor *S<sub>0</sub>*) from the MR signal measured at multiple prepulse delays assuming an inversion recovery GRE signal model. <br /> **Input:** <br /> Inversion method (select from [Inversion methods](generalPurposeProcesses.md#Inversion methods)) with  <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)] = [[Signal (Q.MS1.001)](quantities.md#S), [Prepulse delay time (Q.MS1.008)](quantities.md#PD)], <br/> [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = an IR model from [MR signal models](perfusionModels.md#MR signal models). <br/> **Output:** <br /> [*R<sub>10</sub>* (Q.EL1.002)](quantities.md#R10), <br/> [*S<sub>0</sub>* (Q.MS1.010)](quantities.md#S_0)  | Ordidge et al. 1990|
| P.NR2.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


## <a id="Bolus arrival time estimation"></a> Bolus arrival time estimation

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.BA1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Estimate_BAT"></a>Estimate Bolus Arrival Time | -- | EstimateBAT | This process returns the bolus arrival time (BAT) of a data set according to a specified bolus arrival time estimation method. <br /> **Input:** <br /> Bolus arrival time estimation method (select from [BAT estimation methods](#Bolus arrival time estimation methods)) <br /> **Output**: <br />  [Bolus arrival time (Q.BA1.001)](quantities.md#BAT) | -- |

### <a id="Bolus arrival time estimation methods"></a> Bolus arrival time estimation methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.BA2.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Manual_BAT"></a> Manually | -- | Manually | The BAT is manually determined by visual inspection.<br />  **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)]  <br /> **Output**: <br />  [Bolus arrival time (Q.BA1.001)](quantities.md#BAT) | -- |
| P.BA2.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Theshold_BAT"></a> Data value exceeds threshold | -- | Exceeds threshold | The BAT is estimated as the minimal data grid point at which the data value exceeds a certain threshold.<br /> **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)], <br /> [Lower threshold (Q.GE1.010)](quantities.md#L) <br /> **Output**: <br /> [Bolus arrival time (Q.BA1.001)](quantities.md#BAT) | -- |
| P.BA2.003 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="derThreshold_BAT"></a> Derivative of data values exceeds threshold | -- | Derivative exceeds threshold | The BAT is estimated as the minimal data grid point at which the derivative of the data values exceeds a certain threshold. <br /> **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)], <br /> [Lower threshold (Q.GE1.010)](quantities.md#L) <br /> **Output**: <br /> [Bolus arrival time (Q.BA1.001)](quantities.md#BAT) | -- |
| P.BA2.004 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Intersection_BAT"></a> Intersection-based | -- | Intersection-based | The BAT is determined from calculating the intersection points of the data grid axis and straight lines joining the first N pairs of adjacent points. The BAT is estimated as the maximum of the intersection points. <br /> **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)], <br /> [Intersection-based BAT estimation parameters (Q.BA1.002)](quantities.md#IntersectionBATParms) <br /> **Output**: <br /> [Bolus arrival time (Q.BA1.001)](quantities.md#BAT) | Galbraith et al. 2002 |
| P.BA2.005 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Model_BAT"></a> Model-based | -- | Model-based | A specified model is fitted to the data, yielding the BAT as one of the estimated model parameters. <br /> **Input:** <br /> Inversion method (select from [Inversion methods](generalPurposeProcesses.md#Inversion methods)) <br /> **Output**: <br /> [Bolus arrival time (Q.BA1.001)](quantities.md#BAT) | Singh et al. 2009 |

| P.BA2.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |

## <a id="Baseline estimation"></a> Baseline estimation
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.BL1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Estimate_Baseline"></a> Estimate Baseline | -- | EstimateBaseline | This process returns the value of the baseline of a data set according to a specified baseline estimation method.  <br /> **Input:** <br /> Baseline estimation method (select from [Baseline estimation methods](#Baseline estimation methods)) <br /> **Output**: <br /> [Baseline (Q.BL1.001)](quantities.md#f_BL) | -- |

### <a id="Baseline estimation methods"></a> Baseline estimation methods

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.BL2.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Manual_Baseline"></a> Manually | -- | -- | The baseline is manually determined by visual inspection.  <br /> **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid) <br /> **Output**: <br /> [Baseline (Q.BL1.001)](quantities.md#f_BL) | -- |
| P.BL2.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Nth_Baseline"></a> nth data value | -- | -- | The baseline is determined as the data value of the nth data grid point.  <br /> **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)], <br /> [Index n (Q.GE1.003)](quantities.md#index) <br /> **Output**: <br /> [Baseline (Q.BL1.001)](quantities.md#f_BL) | -- |
| P.BL2.003 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Mean_Baseline"></a> Mean baseline of range | -- | Mean baseline | The baseline is determined as the mean of data values in the data grid range (Start, End).  <br /> **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)], <br /> [Start of range (Q.GE1.013)](quantities.md#x_start),  <br /> [End of range (Q.GE1.014)](quantities.md#x_end) <br /> **Output**: <br /> [Baseline (Q.BL1.001)](quantities.md#f_BL) | -- |
| P.BL2.004 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Min_Baseline"></a> Minimum value | -- | Minimum | The baseline is determined as the minimum of all data values.  <br /> **Input:** <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)] <br /> **Output**: <br /> [Baseline (Q.BL1.001)](quantities.md#f_BL) | -- |
| P.BL2.005 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Model_Baseline"></a> Model-based | -- | -- | A specified model is fitted to the data, yielding the baseline value as one of the estimated model parameters.  <br /> **Input:** <br /> Inversion method (select from [Inversion methods](generalPurposeProcesses.md#Inversion methods)) <br /> **Output**: <br /> [Baseline (Q.BL1.001)](quantities.md#f_BL) | Singh et al. 2009 |
| P.BL2.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


## <a id="Signal calibration"></a> Signal calibration
The processes listed in this section describe commonly used methods to estimate the signal calibration factor *S<sub>0</sub>* from a given MR signal data set. 

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| | P.SC1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Estimate_S0"></a> Estimate signal scaling factor | -- | Estimate *S<sub>0</sub>* | In this process the signal scaling factor is determined according to a specified *S<sub>0</sub>* -estimation method.  <br /> **Input:** <br /> Signal scaling factor estimation method ( select from [signal scaling factor estimation methods](#Signal scaling factor estimation methods)) <br /> **Output**: <br /> [*S<sub>0</sub>* (Q.MS1.010)](quantities.md#S_0) | -- |

### <a id="Signal scaling factor estimation methods"></a> Signal scaling factor estimation methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.SC2.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="S0_from_R1"></a> *S<sub>0</sub>* from native *R<sub>1</sub>* estimation | -- | -- | In this method *S<sub>0</sub>*  is estimated as described in the native *R<sub>1</sub>* -estimation methods which have *S<sub>0</sub>*  as output.  <br /> **Input:** <br />  Select a [native R1 estimation method](#Native R1 estimation methods) with *S<sub>0</sub>* as output  <br /> **Output**: <br /> [*S<sub>0</sub>* (Q.MS1.010)](quantities.md#S_0) | -- |
| P.SC2.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="S0_from_baseline"></a> *S<sub>0</sub>* from baseline signal of dynamic data | -- | -- | In this method *S<sub>0</sub>*  is estimated by inverting a specified MR signal model according to a specified inversion method for the baseline signal and baseline relaxation rate. <br /> **Input:** <br /> Inversion method (select from [Inversion methods](generalPurposeProcesses.md#Inversion methods)) with [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = select from [MR signal models](perfusionModels.md#MR signal models) with <br /> [*R<sub>1</sub>* (Q.EL1.001)](quantities.md#R1) =  [*R<sub>10</sub>* (Q.EL1.002)](quantities.md#R10) <br/> or <br/> [*R<sub>2</sub>* (Q.EL1.004)](quantities.md#R2) = [*R<sub>20</sub>* (Q.EL1.005)](quantities.md#R20) <br/> or <br/> [*R<sub>2</sub><sup>*</sup>* (Q.EL1.007)](quantities.md#R2Star) = [*R<sub>20</sub><sup>*</sup>* (Q.E.008)](quantities.md#R2Star0), <br/> [S (Q.MS1.001)](quantities.md#S) = [*S<sub>BL</sub>*(Q.MS1.002)](quantities.md#S_BL) <br />**Output**: <br /> [*S<sub>0</sub>* (Q.MS1.010)](quantities.md#S_0) | -- |
| P.SC2.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


## <a id="Arterial input function estimation"></a> Arterial input function estimation
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.AE1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Estimate AIF"></a> Estimate arterial input function | -- | Estimate AIF | This process returns the AIF from a given data set, derived using a specified AIF estimation method. Furthermore, it can be optionally specified if an AIF correction method (.e.g. Partial volume correction) will be applied or if a measurement preparation (e.g. dual bolus) has been done for data acquisition.  <br /> **Input:** <br /> AIF estimation method (select from [AIF estimation methods](#AIF estimation methods)), <br /> *optional*: <br /> AIF correction or measurement preparation (select from [AIF correction and measurement preparation](#AIF correction and measurement preparation)).  <br /> **Output**: <br />  [[C<sub>a,p</sub> (Q.IC1.001.[a,p])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] or <br /> [[C<sub>a,b</sub> (Q.IC1.001.[a,b])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] | -- |

### <a id="AIF estimation methods"></a> AIF estimation methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.AE2.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Literature-based_AIF"></a> Literature-based AIF | Population-based AIF | -- | The AIF is taken from a published reference or from the average of a population.  <br /> **Input:** <br /> --  <br /> **Output**: <br />  [[C<sub>a,p</sub> (Q.IC1.001.[a,p])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] or <br /> [[C<sub>a,b</sub> (Q.IC1.001.[a,b])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] | -- |
| P.AE2.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Mean_ROI_AIF"></a> Mean ROI AIF | -- | -- | In this process the AIF is determined by specifying the mask of a user-defined region of interest (within an artery). This process returns the mean concentration time curve within this masked ROI. <br /> **Input:** <br /> [[Indicator concentration (Q.IC1.001)](quantities.md#C),  [t (Q.GE1.004)](quantities.md#t)], <br /> [Binary AIF mask (Q.SE1.002)](quantities.md#BinAIFMask) <br />  **Output**: <br /> [[C<sub>a,b</sub> (Q.IC1.001.[a,b])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] | -- |
| P.AE2.003 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Model-based_AIF"></a> Model-based AIF | -- | -- | The AIF is derived from fitting a model to the dynamic concentration data. <br /> **Input:** <br /> Inversion method (select from inversion methods) with <br /> [[Data (Q.GE1.002)](quantities.md#Data), [Data grid (Q.GE1.001)](quantities.md#DataGrid)] =  [[Indicator concentration (Q.IC1.001)](quantities.md#C), [t (Q.GE1.004)](quantities.md#t)] and <br /> [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = select from [AIF models](perfusionModels.md#AIF models) or [descriptive models](perfusionModels.md#Descriptive models)] <br />  **Output**: <br />  [[C<sub>a,p</sub> (Q.IC1.001.[a,p])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] or <br /> [[C<sub>a,b</sub> (Q.IC1.001.[a,b])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] | -- |
| P.AE2.004 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Automatic_k-means-cluster-based_AIF"></a> Automatic *k*-means-cluster-based  | -- | *k*-means | For automatic AIF selection, a k-means cluster algorithm to identify k clusters. The cluster with the lowest first moment represents the AIF. <br /> **Input:** <br /> [[Indicator concentration (Q.IC1.001)](quantities.md#C), [t (Q.GE1.004)](quantities.md#t)], <br />  [Binary AIF mask (Q.SE1.002)](quantities.md#BinAIFMask), <br />  [*k*-means-cluster-algorithm-parameters (Q.AE1.001)](quantities.md#kMeansParams) <br /> **Output**: <br /> [[C<sub>a,b</sub> (Q.IC1.001.[a,b])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] | -- |
| P.AE2.005 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Automatic_fuzzy-c-means-cluster-based_AIF"></a> Automatic fuzzy-c-means-cluster-based | -- | FCM | For automatic AIF selection, a fuzzy-c-means-cluster algorithm with the "fuzziness" parameter *m*, the iterative tolerance level $\epsilon$, the number of clusters *c*, the cluster probability threshold value *P<sub>c</sub>* and the initial cluster centroids *v<sub>i</sub>*  are applied. The cluster with maximal $M = \frac{f_{max}}{TTP\cdot FWHM}$ represents the AIF.  <br /> **Input:** <br /> [[Indicator concentration (Q.IC1.001)](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)], <br />  [Binary AIF mask (Q.SE1.002)](quantities.md#BinAIFMask), <br />  [Fuzzy-c-means-cluster-algorithm parameters (Q.AE1.002)](quantities.md#fuzzycMeansParams) <br />  **Output**: <br /> [[C<sub>a,b</sub> (Q.IC1.001.[a,b])](quantities.md#C), [t (Q.GE1.004)](quantities.md#time)] | -- |
| P.AE2.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


### <a id="AIF correction and measurement preparation"></a> AIF correction and measurement preparation
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.AE3.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="PVC"></a> Partial-volume effect corrected | -- | PVE |  If this item is set in the [Estimate AIF (P.AE1.001)](#Estimate AIF) method, partial volume effects are accounted for. Otherwise, or if not specified, no partial volume effect correction was performed. | -- |
| P.AE3.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="DualBolus"></a> Dual Bolus | -- | DB | If this item is set in the [Estimate AIF (P.AE1.001)](#Estimate AIF) method, the full-dose AIF was reconstructed from a pre-bolus injection with a smaller dose. Otherwise, or if not specified, no dual bolus approach was used. | Risse et al. 2006 |
| P.AE3.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


## <a id="Conversion from signal to concentration"></a> Conversion from signal to concentration

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.SC1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="SignalToConc"></a> Convert signal to concentration | -- | ConvertSToC | In this process the MR signal is converted to the indicator concentration according to a specified concentration conversion method. <br /> **Input:** <br /> Signal to concentration conversion method (select from [signal to concentration conversion methods](#Signal to concentration conversion methods)). <br />  **Output**: <br /> [Indicator concentration (Q.IC1.001)](quantities.md#C) <br />  | -- |

### <a id="Signal to concentration conversion methods"></a> Signal to concentration conversion methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.SC2.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="Direct_conversion_from_signal_concentration"></a> Direct conversion from signal concentration | -- | ConvertDirectSToC | In this process the MR signal is directly converted to the indicator concentration by inverting a specified forward model which describes a direct relationship between signal and indicator concentration.  <br /> **Input:** <br /> Inversion method (select from [inversion methods](generalPurposeProcesses.md#Inversion methods)) with <br /> [Data (Q.GE1.002)](quantities.md#Data) = [Signal (Q.MS1.001)](quantities.md#S), <br /> [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = select [MR signal model](perfusionModels.md#MR signal models) with direct relationship between signal and indicator concentration <br />   **Output**: <br /> [Indicator concentration (Q.IC1.001)](quantities.md#C) <br />  | -- |
| P.SC2.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="SignalToConc_via_EP"></a> Conversion via electromagnetic property| -- | ConvertSToCViaEP | In this process the MR signal is first converted to an electromagnetic property, which is in a second step converted to indicator concentration.  <br /> **Input:** <br /> Signal to electromagnetic property conversion method (select from [signal to electromagnetic property conversion conversion methods](#Signal to electromagnetic property conversion methods)), <br /> Electromagnetic property to concentration conversion method (select from [electromagnetic property to concentration conversion methods](#Electromagnetic property to concentration conversion methods)) <br />   **Output**: <br /> [Indicator concentration (Q.IC1.001)](quantities.md#C) <br />  | -- |
| P.SC2.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


### <a id="Signal to electromagnetic property conversion methods"></a> Signal to electromagnetic property conversion methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.SE1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="SignalToEP_Model"></a> Model-based | -- | -- | In this process the MR signal is converted to an electromagnetic property (e.g. R<sub>1</sub>) via inversion of a specified model.  <br /> **Input:** <br /> Inversion method (select from [inversion methods](generalPurposeProcesses.md#Inversion methods)) with <br /> [Data (Q.GE1.002)](quantities.md#Data) = [Signal (Q.MS1.001)](quantities.md#S), <br /> [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = select from [MR signal models](perfusionModels.md#MR signal models) <br />  **Output**: <br /> Quantity from [Electromagnetic quantities](quantities.md#Electromagnetic quantities) ( e.g. *R<sub>1</sub>*, *R<sub>2</sub>*, *R<sub>2</sub><sup>*</sup>* or $\chi$ ) <br />  | -- |
| P.SE1.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |



### <a id="Electromagnetic property to concentration conversion methods"></a> Electromagnetic property to concentration conversion methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.EC1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="EPToConc_Model"></a> Model-based| -- | -- | In this process an electromagnetic property (e.g. R<sub>1</sub>) is converted to the indicator concentration via inversion of a specified model. <br /> **Input:** <br /> Inversion method (select from [inversion methods](generalPurposeProcesses.md#Inversion methods)) with <br /> [Data (Q.GE1.002)](quantities.md#Data) = [Electromagnetic quantities](quantities.md#Electromagnetic quantities), <br /> [Forward model (M.GF1.001)](perfusionModels.md#Forward model) = select from [electromagnetic property models](perfusionModels.md#Electromagnetic property models)  <br />  **Output**: <br /> [Indicator concentration (Q.IC1.001)](quantities.md#C) <br />  | -- |
| P.EC1.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


## <a id="Leakage correction"></a> Leakage correction
This group contains methods used to correct for the leakage of an indicator into the tissue which is not assumed to leave the vasculature.

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.LC1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="LeakageCorrection"></a> Leakage correction | -- | LC | This method is used to correct for the leakage of an indicator into the tissue which is not assumed to leave the vasculature. <br />  **Input**: <br /> Leakage correction method (select from [leakage correction methods](#Leakage correction methods)) <br />  **Output**: <br /> [R<sub>2</sub><sup>*</sup> (Q.EL1.007)](quantities.md#R2Star) | -- |


### <a id="Leakage correction methods"></a> Leakage correction methods
| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.LC2.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="LeakageCorrection_Model"></a> Model-based | -- | -- | The leakage correction is done assuming a leakage correction model. <br />  **Input**: <br /> Inversion method (select from [inversion methods](generalPurposeProcesses.md#Inversion methods)) with a [Forward model (M.GF1.001)](generalPurposeProcesses.md#Forward model) from [leakage correction models](perfusionModels.md#Leakage correction models) <br />  **Output**: <br /> [R<sub>2</sub><sup>*</sup> (Q.EL1.007)](quantities.md#R2Star) | -- |
| P.LC2.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |


## <a id="Extraction of parameters"></a> Extraction of parameters
In this group methods are listed how to derive physiological or descriptive parameters.

| Code | OSIPI name| Alternative names|Notation|Description|Reference|
| -- | -- | -- | -- | -- | -- |
| P.EX1.001 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="ParamExtraction_Model"></a> Model-based parameter extraction| -- | Model-based | Parameters are derived by inverting a specified model which provides as output physiological or descriptive model quantities, e.g. via model fitting or deconvolution. <br />  **Input**: <br /> Inversion method (select from [inversion methods](generalPurposeProcesses.md#Inversion methods)) with a [Forward model (M.GF1.001)](perfusionModels.md#Forward model) from [indicator concentration models](perfusionModels.md#Indicator concentration models) or [descriptive models](perfusionModels.md#Descriptive models). <br />  **Output**: <br /> [[Estimated model parameters (Q.OP1.003)](quantities.md#EMP) from [physiological quantities](quantities.md#Physiological quantities) or [descriptive model quantities](quantities.md#Descriptive model quantities)] | -- |
| P.EX1.002 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="ParamExtraction_Curve"></a> Curve descriptive parameter extraction | -- | Descriptive | This process returns the value of a curve descriptive quantity from a given data set on a given data grid according to a specified curve descriptive process. <br />  **Input**: <br /> Method from [curve descriptive processes](generalPurposeProcesses.md#Curve descriptive processes) <br />  **Output**: <br /> [Quantities from [curve descriptive quantities](quantities.md#Curve descriptive quantities)]| -- |
| P.EX1.003 <button class="md-button md-button--hyperlink">COPY LINK</button> | <a id="ParamExtraction_Derived"></a> Derivation of parameters from other parameters | -- | Identity-based | This process returns a quantity from other given quantities and a specified parameter identity model. <br />  **Input**: <br /> Inversion method (select from [inversion methods](generalPurposeProcesses.md#Inversion methods)) with a [Forward model (M.GF1.001)](perfusionModels.md#Forward model) from [perfusion identity models](perfusionModels.md#Perfusion identity models) <br />  **Output**: <br /> [[Estimated model parameters (Q.OP1.003)](quantities.md#EMP) from [physiological quantities](quantities.md#Physiological quantities)]| -- |
| P.EX1.999 | Method not listed | -- | -- |This is a custom free-text item, which can be used if a method of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage.  | -- |




















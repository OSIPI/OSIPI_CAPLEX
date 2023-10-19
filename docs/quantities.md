
# Sections Q: Quantities

## <a name="MR signal quantities"></a> MR signal quantities
The items in this group are related to the MR signal and quantities of the MR sequence used to acquire the signal.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.MS1.001.[j] | <a name="S"></a> Signal | -- | *S<sub>j</sub>* | The MR signal (magnitude, phase or complex depending on context) in compartment *j*. | a.u. | -- |
| Q.MS1.001.[j] | <a id="S" href="#S"></a>Signal <button class="md-button" onclick="copyToClip(document.getElementById('Signal').href)">HYPERLINK</button> | -- | *S<sub>j</sub>* | The MR signal (magnitude, phase or complex depending on context) in compartment *j*. | a.u. | -- |
| Q.MS1.002.[j] | <a name="S_BL"></a> Baseline signal | --| *S<sub>BL,j</sub>* | Pre-contrast MR signal (magnitude, phase or complex depending on context) in compartment *j* before the arrival of indicator at the tissue of interest. | a.u. | -- |
| Q.MS1.003.[j] | <a name="AE"></a> Absolute enhancement | -- | *AE<sub>j</sub>* | The absolute signal change from baseline  $\left\| S_j-S_{BL,j} \right\|$ in compartment *j* induced by an indicator. In DCE, the enhancement is positive and in DSC, the enhancement is negative.| a.u. | -- |
| Q.MS1.004.[j] | <a name="RE"></a> Relative enhancement | -- | *RE<sub>j</sub>* | The relative signal change from baseline $\left\|\frac{S_j}{S_{BL,j}}-1\right\|$ in compartment *j* induced by the indicator. In DCE, the enhancement is positive and in DSC, the enhancement is negative. | -- | -- |
| Q.MS1.005 | <a name="TE"></a> Echo time | -- | TE | The time between the application of the radiofrequency excitation pulse and the center of the echo. | ms |-- |
| Q.MS1.006 | <a name="TR"></a> Repetition time | -- | TR | The time between the beginning of a pulse sequence and the beginning of a succeeding (essentially identical) pulse sequence. | ms | -- |
| Q.MS1.007 | <a name="Flip angle"></a> Prescribed excitatory flip angle | -- | $\alpha$ | The prescribed nutation angle of the net magnetization immediately following an excitation RF pulse. | deg | -- |
| Q.MS1.008 | <a name="PD"></a> Prepulse delay time | Inversion time TI (in case of an inversion recovery sequence) | PD | The time between the middle of a prepulse (e.g. inversion pulse) and the middle of the pulse that reads out the center of k-space. | ms | -- |
| Q.MS1.009 | <a name="PF Flip angle"></a> Prepulse flip angle | -- | $\alpha_{p}$ | The nutation angle of the net magnetization immediately following a prepulse. | deg | -- |
| Q.MS1.010 | <a name="S_0"></a> Signal scaling factor | -- | *S<sub>0</sub>*  | A constant scaling factor in a signal model. $S_0$ typically includes contributions from the receiver gain, the proton density and the coil sensitivities. | -- | -- |
| Q.MS1.011 | <a name="n k-space"></a> Number of lines to k-space center | --| *n* | The number of lines to *k*-space center in the phase encoding direction. | -- | -- |
| Q.MS1.012 | <a name="N k-space"></a> Total number of k-space lines | -- | *N* | The total number of phase encoding lines for acquiring an image. | -- | -- |
| Q.MS1.013 | <a name="N reps"></a> Total number of dynamic volumes | -- | *$n_{rep}$* | The total number of dynamic volumes acquired as part of the DCE- or DSC-MRI examination. | -- | -- |
| Q.MS1.999 | <a name="not listed MS1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |

## <a name="Electromagnetic quantities"></a> Electromagnetic quantities
The items in this group are related to electromagnetic tissue properties and electromagnetic properties of contrast agents. The abbreviations SE and GE denote spin and gradient echo.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.EL1.001.[j]| <a name="R1"></a> Longitudinal relaxation rate | *R<sub>1</sub>* -relaxation rate | $R_{1,j}$ | Longitudinal relaxation rate in compartment *j*. | 1/s | -- |
| Q.EL1.002.[j] | <a name="R10"></a> Native longitudinal relaxation rate |Baseline *R<sub>1</sub>* | $R_{10,j}$ | Longitudinal relaxation rate in compartment *j*. | 1/s | -- |
| Q.EL1.003.[j] | <a name="DeltaR1"></a> Change in longitudinal relaxation rate  | -- | $\Delta R_{1,j}^*$ | Change in longitudinal relaxation rate with respect to $R_{10,j}$ in compartment *j*. | 1/s | -- |
| Q.EL1.004.[j] | <a name="R2"></a>  Transverse relaxation rate (SE) | *R<sub>2</sub>*-relaxation rate | $R_{2,j}$ | Natural transverse relaxation rate (observed using a SE) in compartment *j*. | 1/s | -- |
| Q.EL1.005.[j] | <a name="R20"></a> Native transverse relaxation rate (SE) |Baseline *R<sub>2</sub>*-relaxation rate | $R_{20,j}$ | Pre-contrast natural transverse relaxation rate (observed using a SE) in compartment *j*. | 1/s | -- |
| Q.EL1.006.[j] | <a name="DeltaR2"></a> Change in transverse relaxation rate (SE)  | -- | $\Delta R_{2,j}$ | Change in natural transverse relaxation rate (observed using a SE) with respect to $R_{20}$ in compartment *j*. | 1/s | -- |
| Q.EL1.007.[j] | <a name="R2Star"></a> Transverse relaxation rate (GE) | $R_{2}^*$-relaxation rate | $R_{2,j}^*$ | Effective transverse relaxation rate (observed using a GE) in compartment *j*. | 1/s | -- |
| Q.EL1.008.[j] | <a name="R2Star0"></a> Native transverse relaxation rate (GE) | Baseline $R_{2}^*$ | $R_{20,j}^*$ | Pre-contrast effective transverse relaxation rate (observed using a GE) in compartment *j*. | 1/s | -- |
| Q.EL1.009.[j] | <a name="DeltaR2Star"></a> Change in transverse relaxation rate (GE) | -- | $\Delta R_{2,j}^*$ | Change in effective transverse relaxation rate (observed using a GE) with respect to $R_{20}^*$ in compartment *j*.| 1/s | -- |
| Q.EL1.010 | <a name="R2ref"></a> Change in a reference transverse relaxation rate  | -- | $\overline{\Delta R}_{2,ref}^*$ | Average change in effective transverse relaxation rate in a reference area with no indicator extravasation. | 1/s | -- |
| Q.EL1.011.[j] | <a name="Chi"></a> Molar magnetic susceptibility | -- | $\chi_j$ | Molar magnetic susceptibility in compartment *j*. | mL/mol | -- |
| Q.EL1.012.[j] | <a name="Chi0"></a> Native molar magnetic susceptibility | Baseline *&#967 | $\chi_{0,j}$ | Pre-contrast molar magnetic susceptibility in compartment *j*. | mL/mol | -- |
| Q.EL1.013.[j] |  <a name="DeltaChi"></a> Change in molar magnetic susceptibility | -- | $\Delta \chi_j$ | Change in molar magnetic susceptibility with respect to $\chi_{0}$ in compartment *j*.  | mL/mol | -- |
| Q.EL1.014.[j] | <a name="DelChi"></a>  Molar magnetic susceptibility change per unit concentration of indicator | -- | $\delta \chi_j$ | Molar magnetic susceptibility change per unit concentration of indicator in compartment *j*. | mL/mol/mM| -- |
| Q.EL1.015.[j] | <a name="r1"></a> Longitudinal relaxivity | *r<sub>1</sub>* -relaxivity | *r<sub>1,j</sub>* | Longitudinal relaxivity in compartment *j*. | 1/s/mM | -- |
| Q.EL1.016.[j] | <a name="r2"></a> Transverse relaxivity (SE) | *r<sub>2</sub>* -relaxivity | *r<sub>2,j</sub>*  | Transverse relaxivity (observed using a SE) in compartment *j*. | 1/s/mM | -- |
| Q.EL1.017 | <a name="r2star"></a> Transverse relaxivity (GE) | *r<sub>2</sub><sup>*</sup>* -relaxivity | *r<sub>2</sub><sup>*</sup>* | Transverse relaxivity (observed using a GE) in the voxel. | 1/s/mM | -- |
| Q.EL1.018 | <a name="r1f"></a> Longitudinal relaxivity of free indicator | -- |  *r<sub>1,f</sub>* | Longitudinal relaxivity of free (unbound) indicator. | 1/s/mM | -- |
| Q.EL1.019 | <a name="r1b"></a> Longitudinal relaxivity of bound indicator | -- | *r<sub>1,b</sub>*  | Longitudinal relaxivity of bound indicator. | 1/s/mM | -- |
| Q.EL1.020 | <a name="k1k2"></a> Transverse relaxivities of the quadratic model (GE) | -- | [*k<sub>1</sub>*,k<sub>2</sub>] | First and second order relaxivities for the quadratic model of the transverse relaxation rate (GE) | [1/s/mM,1/s/mM]| -- |
| Q.EL1.999 | <a name="not listed EL1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Indicator concentration quantities"></a> Indicator concentration quantities
The items of this group of quantities are either measured or modeled quantities used when pharmacokinetic modeling is applied. This section is split into the subsections indicator kinetic model quantities and AIF model quantities. The latter contains only quantities specific to often used AIF models.

### <a name="Indicator kinetic model quantities"></a>  Indicator kinetic model quantities
The items of this group of quantities are either measured or modeled quantities used when pharmacokinetic modeling is applied.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.IC1.001.[j] | <a name="C"></a> Indicator concentration | -- | *C<sub>j</sub>* | Concentration of indicator molecules in compartment *j*. | mM | -- |
| Q.IC1.002 | <a name="R"></a> Tissue residue function| -- | *R* | Fraction of indicator molecules entering a volume of distribution at time t=0 that are still present at time t. | -- | -- |
| Q.IC1.003 | <a name="h"></a> Tissue transit time distribution| -- | *h* | Probability distribution of transit times through volume of interest.  | -- | -- |
| Q.IC1.004 | <a name="ha"></a> Arterial transit time distribution | -- | *h<sub>a</sub>* |Probability distribution of transit times through the arterial tree (between AIF location and tissue of interest). | -- | -- |
| Q.IC1.005 | <a name="IRF"></a> Tissue impulse response function | *IRF* | *I* |Defined by the relationship $C_t=I\otimes C_{a,p}$ . | 1/s | -- |
| Q.IC1.006 | <a name="IRFGeneral"></a> General impulse response function |*IRF* | *I* |Defined by the relationship $C_x=I\otimes C_y$ . | 1/s | -- |
| Q.IC1.999 | <a name="not listed IC1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Physiological quantities"></a> Physiological quantities
In this group commonly used quantities with a physiological meaning are listed.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.PH1.001.[j] | <a name="v"></a> Relative volume fraction | -- | *v<sub>j</sub>* | The relative volume fraction of compartment *j*. Only capillary vasculature is considered, thus the *c* subscript is dropped. | mL/100mL | -- |
| Q.PH1.002 | <a name="Fp"></a> Blood plasma flow| -- | *F<sub>p</sub>* | The volume of blood plasma flowing into a unit tissue volume per unit time. The flow inputs and exits the capillary vasculature. | mL/min/100mL | -- |
| Q.PH1.003 | <a name="Fb"></a> Blood flow | Cerebral blood flow (CBF) | *F<sub>b</sub>* | The volume of blood flowing into a unit tissue volume per unit time. The flow inputs and exits the capillary vasculature. | mL/min/100mL | -- |
| Q.PH1.004 | <a name="PS"></a> Permeability surface area product | Extraction flow (FE) | *PS* | The volume of tissue plasma that is fully cleared of indicator in a unit of time by a unit tissue volume. | mL/min/100mL | -- |
| Q.PH1.005 | <a name="E"></a> Extraction fraction | -- | *E*  | The fraction of indicator particles that is extracted from plasma in one pass through the vasculature. | -- | -- |
| Q.PH1.006.[j] | <a name="MTT"></a> Mean transit time| -- | *MTT<sub>j</sub>* | The average time the indicator spends in compartment *j* before exchanging into another compartment. | s | -- |
| Q.PH1.007 | <a name="Ta"></a> Arterial delay time | -- | *T<sub>a</sub>*  | Delay between indicator arrival at the arterial input function location and the voxel or tissue region of interest. | s | -- |
| Q.PH1.008 | <a name="Ktrans"></a> Volume transfer constant | Transfer constant | *K<sup>trans</sup>* | The rate of indicator particle delivery from the blood plasma to the extravascular, extracellular volume per unit of tissue volume, per unit arterial plasma concentration. | 1/min | -- |
| Q.PH1.009.[j] | <a name="k"></a> Indicator exchange rate | -- | *k<sub>j</sub>*  | Indicator exchange  rate constant between two compartments (e.g. $k_{e \to b}$) | 1/s | -- |
| Q.PH1.010.[j] | <a name="kw"></a> Water exchange rate  | *k<sub>in</sub>*, *k<sub>out</sub>* | *k<sub>w,j</sub>* | Equilibrium water exchange rate between two compartments  (e.g. $k_{w, e \to b}$)  | 1/s | -- |
| Q.PH1.011 | <a name="rho"></a> Density | -- | $\rho$ | The density of the tissue of interest. | g/mL | -- |
| Q.PH1.012.[j] | <a name="Hct"></a> Hematocrit | -- | *Hct<sub>j</sub>*  | The volume percentage of red blood cells in the blood compartment *j*. | -- | -- |
| Q.PH1.013 | <a name="Hctf"></a> Hematocrit factor|-- | *Hct<sub>f</sub>* | Blood flow correction factor accounting for the difference in arterial hematocrit *Hct<sub>a</sub>* and capillary hematocrit *Hct<sub>c</sub>*.| -- | -- |
| Q.PH1.014 | <a name="CTTH"></a> Capillary transit time heterogeneity | -- | *CTTH* | Standard deviation of the capillary transit time distribution.| s | -- |
| Q.PH1.015 | <a name="OEFmax"></a> Maximum oxygen extraction fraction| -- | OEF<sup>max</max> | Upper biophysical limit of the proportion of oxygen that can be extracted by tissue. | -- | --|
| Q.PH1.016.[j] | <a name="PELoW"></a> Pre-exchange lifetime of water | -- | $\tau_j$ | The average time water molecules spend in compartment j before exchanging into another compartment. | $s^{-1}$ | [Donahue et al. 1997](https://doi.org/10.1002/jmri.1880070114){:target="_blank"},<br/> [Woessner 1961](https://doi.org/10.1063/1.1731931){:target="_blank"} |
| Q.PH1.017.[j] | <a name="VWPF"></a> Visible water population fraction | -- | $p_j$ | The water population fraction inside compartment j. | Unitless | -- |
| Q.PH1.999 | <a name="not listed PH1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="General physical and mathematical quantities"></a> General physical and mathematical quantities
This section contains general physical and mathematical quantities which are used in the context of perfusion image analysis.

| Code | OSIPI name | Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.GE1.001 | <a name="DataGrid"></a> Data grid | -- | *[x<sub>1</sub>,...,x<sub>n</sub>]* | Sampling points of a data set (typically time or frequency). | variable | -- |
| Q.GE1.002 | <a name="Data"></a> Data | -- | *[f<sub>1</sub>,...,f<sub>n</sub>]* | Values of a data set with respect to a data grid. The data set has the value *f<sub>i</sub>* at data grid point *x<sub>i</sub>*. | variable | -- |
| Q.GE1.003 | <a name="index"></a> Index | -- | *i* | The number of the index of a data or data grid point. | -- | -- |
| Q.GE1.004 | <a name="time"></a> Time | -- | *t* | Time | s | -- |
| Q.GE1.005 | <a name="timeStep"></a> Time step | -- | $\Delta t$  | Time between two successive data points, e.g. two images (for fixed temporal resolution). | s | -- |
| Q.GE1.006 | <a name="freq"></a> Frequency | -- | $\nu$ |Frequency | 1/s | -- |
| Q.GE1.007 | <a name="Lax"></a> Axial length | -- | *L<sub>ax</sub>* | The axial length of a cylindrical object, e.g. a capillary. | $\mu m$ | -- |
| Q.GE1.008 |<a name="xax"></a>  Axial position | -- | *x<sub>ax</sub>* | The spatial position within a cylindrical object, e.g. a capillary. In the case of a capillary x=0 denotes the arterial inlet position and x=L<sub>ax</sub> the venous outlet position. | $\mu m$ | -- |
| Q.GE1.009 | <a name="const"></a> Constant value | -- | *k* | A constant value which can be used e.g. for scaling. | variable | -- |
| Q.GE1.010 | <a name="L"></a> Lower threshold | -- | *L* | The lower value at which the behavior of a function or algorithm changes. | variable | -- |
| Q.GE1.011 | <a name="U"></a> Upper threshold | -- | *U* | The upper value at which the behavior of a function or algorithm changes.   | variable | -- |
| Q.GE1.012 | <a name="f(x)"></a> Dynamic function | -- | $f(x)$ | A function of an independent variable *x* (typically time or frequency) with value $f(x_i)$ at data grid point $x_i$. | variable | -- |
| Q.GE1.013 | <a name="x_start"></a> Start of range | -- | $x_{start}$ | The start point of the range [$x_{start}$, $x_{end}$].  | variable | -- |
| Q.GE1.014 | <a name="x_end"></a> End of range | -- | $x_{end}$  | The end point of the range [$x_{start}$, $x_{end}$]. | variable | -- |
| Q.GE1.015 | <a name="sampleSize"></a> Sample size | -- | *n* | The number samples within a data set.| variable | -- |
| Q.GE1.999 | <a name="not listed GE1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Curve descriptive quantities"></a> Curve descriptive quantities
Descriptive parameters describe the shape of a data set sampled at a data grid, but do not offer a direct physiological interpretation. <br/>
The data set is often the measured MR signal sampled at specified time points, but it can also be some normalized version of it, or a derived signal such as dynamic concentration time curve or dynamic relaxation rate curve derived from an MR signal.
To keep the inputs of these processes flexible, they are all defined for general data $f(x_i)$ on a data grid of points $f(x_i)$ and it is left to the user to specify the data and data grid these processes are applied to (e.g. [Tissue indicator concentration (Q.I.002) , Time (Q.G.004)]).

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.CD1.001| <a name="f(x_i)"></a> Data value at data grid point | -- | $f(x_i)$ | The data value at the data grid point $x_i$. | variable | -- |
| Q.CD1.002 | <a name="f_max"></a> Maximum value | -- | $f_{max}$ | The maximum value of given data. | variable | -- |
| Q.CD1.003 | <a name="x_max"></a> Data grid point of maximum value| -- | $x_{max}$ | The data grid point at which the maximum value of a given data set occurs. | variable | -- |
| Q.CD1.004 | <a name="f_min"></a> Minimum value | -- | $f_{min}$ | The minimum value of given data. | variable | -- |
| Q.CD1.005 | <a name="x_min"></a> Data grid point of minimum value | -- | $x_{min}$ |The data grid point at which the minimum value of a given data set occurs. | variable | -- |
| Q.CD1.006 | <a name="f_fin"></a> Final data value | -- | $f_{fin}$ | The value of the data at the last data grid point. | variable | --|
| Q.CD1.007 | <a name="x_fin"></a> Final data grid point | -- | $x_{fin}$ | The last point of a given data grid. | variable | -- |
| Q.CD1.008 | <a name="maxDev"></a> Maximum deviation from baseline | -- | $\Delta f_{BL, max}$ | The maximum absolute deviation of a given data set from the baseline. | variable | -- |
| Q.CD1.009 | <a name="Deriv"></a> Derivative at data grid point $x_i$ | -- | $\frac{df(x_{i})}{dx}$ | Derivative of a function _f_ with respect to the independent variable _x_ at the data grid point $x_i$. | variable | -- |
| Q.CD1.010 | <a name="TTP"></a> Time to peak | -- | *TTP* | The time between the bolus arrival time (BAT) and the maximum time point *x<sub>max</sub>*: $TTP = x_{max} - BAT$ <br/>(Remark: this is expressed for time rather than a general data grid, because TTP is an often used parameter in perfusion analysis). | variable | -- |
| Q.CD1.011 | <a name="WIS"></a> Wash-in-slope | -- | *WIS* | The ratio of the difference of the maximum data value $f_{max}$ and the baseline value $f_{BL}$ and the time to peak: $WIS = \frac{f_{max}-f_{BL}}{TTP}$  | $\frac{variable_{1}}{variable_{2}}$ | -- |
| Q.CD1.012 | <a name="WOS"></a> Wash-out-slope | -- | *WOS* | The ratio of the difference of the maximum data value $f_{max}$ and the data value at the last data grid point $f_{fin}$ and difference between the last time point and the time at which the maximum occurs: $WOS = \frac{f_{max}-f_{fin}}{x_{max}-x_{fin}}$ | $\frac{variable_{1}}{variable_{2}}$ | -- |
| Q.CD1.013 | <a name="AUC"></a> Area under curve | --| *AUC<sub>x<sub>start</sub>,x<sub>end</sub></sub>* | The integral value of a given dynamic function _f_ (or the numeric approximation for discrete data $[f_{1}, ...f_{n}]$ ) between the data grid points $x_{1}$ and $x_{2}$.  | $variable_{1} * variable_{2}$ | --|
| Q.DC1.999 | <a name="not listed DC1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Bolus arrival time estimation quantities"></a> Bolus arrival time estimation quantities
This section lists all quantities related to the estimation process of the bolus arrival time of a data curve.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.BA1.001 | <a name="BAT"></a> Bolus arrival time | Onset Time, Lag Time| *BAT* | The time between the first data grid point and the onset obtained by applying a specified BAT estimation method. | variable| -- |
| Q.BA1.002 | <a name="IntersectionBATParms"></a> Intersection- based BAT estimation parameters| --| *[N]* | Vector of ordered inputs to the intersection-based BAT estimation process. | -- | --|
| Q.BA1.999 | <a name="not listed BA1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Baseline estimation quantities"></a> Baseline estimation quantities
This section lists all quantities related to the estimation process of the baseline of a data curve.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.BL1.001 | <a name="f_BL"></a> Baseline value  | -- | f<sub>BL</sub> | The value of a series of data of constant values in the beginning of a data set before the behavior of the data set changes. The baseline value is obtained by applying the baseline estimation process. | variable | -- |
| Q.BL.999 | <a name="not listed BL1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |

## <a name="Descriptive model quantities"></a> Descriptive model quantities
This section lists all quantities related to the estimation process of the baseline of a data curve.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.DM1.001 | <a name="UnitStepParams"></a> Unit step model parameters  | -- | *[T]* | Vector of ordered inputs to the unit step model (M.DM1.001).| [variable units] | -- |
| Q.DM1.002 | <a name="LinQuandraticParams"></a> Linear-quadratic model parameters | -- | *[BAT, f<sub>BL</sub>, $\beta_{1}$, $\beta_{2}$]* | Vector of ordered inputs to the linear quadratic model (M.DM1.002). | [variable units]  | -- |
| Q.DM1.003 | <a name="2SLParams"></a> Two step linear model parameters | -- | *[BAT, f<sub>BL</sub>, b<sub>1</sub>]* | Vector of ordered inputs to the two step linear model (M.DM1.003). | [variable units] | -- |
| Q.DM1.004 | <a name="3SLPamars"></a> Three step linear model parameters | -- | *[BAT, f<sub>BL</sub>, $\beta$, b<sub>1</sub>, b<sub>2</sub>]* | Vector of ordered inputs to the three step linear model (M.DM1.004). | [variable units] | -- |
| Q.DM1.005 | <a name="MultiExpParams"></a> Multi-exponential model parameters | -- | *[A<sub>1</sub>, ...A<sub>n</sub>, a<sub>1</sub>, ...a<sub>n</sub>]* | Vector of ordered inputs to the multi-exponential model (M.DM1.005). |[variable units]  | -- |
| Q.DM1.006 | <a name="GammaVarParams"></a> Gamma-variate model parameters | -- | *[BAT, $\alpha$, $\beta$]* | Vector of ordered inputs to the gamma-variate model (M.DM1.006). | [variable units] | -- |
| Q.DM1.007 | <a name="FermiParams"></a> Fermi model parameters | -- | *[F, a, b]* | Vector of ordered inputs to the Fermi model (M.DM1.007). | [variable units] | -- |
| Q.DM1.008 | <a name="NormalParams"></a> Normal distribution model parameters | -- | *[$\mu$, $\sigma$]* | Vector of ordered inputs to normal distribution model (M.DM1.008). | [variable units] | -- |
| Q.DM1.999 | <a name="not listed DM1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |



## <a name="Leakage correction model quantities"></a> Leakage correction model quantities
Leakage correction model parameters are typically ad-hoc correction factors for physical models that are not purely descriptive but are not derived from rigorous physical models, therefore they are not listed in the physiological quantities group. 

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.LC1.001 | <a name="K1"></a> Uncontaminated R<sub>2</sub><sup>*</sup> scaling term  |--| K<sub>1</sub> | Scaling constant for the uncontaminated effective transverse relaxation rate in the BSW leakage correction model and Bidirectional leakage correction model. | -- | -- |
| Q.LC1.002 | <a name="K2"></a> Leakage scaling term | -- | K<sub>2</sub> | Scaling constant which reflects the effects of leakage in the BSW leakage correction model and Bidirectional leakage correction model. | 1/s | -- |
| Q.LC1.999 | <a name="not listed LC1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Uncertainty and statistical quantities"></a> Uncertainty and statistical quantities
<b><font color=#FF0000>This section is currently work in progress</font></b> </br></br>
In this group commonly used quantities to describe uncertainties of the extracted parameters and other statistical properties in the context of perfusion image analysis.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.US1.001 | <a name="Mean_sample"></a> Arithmetic mean (sample) | Average | $\bar{x}$ | The mean value of a given data sample *[x<sub>1</sub>,...,x<sub>n</sub>]*, with sample size n, calculated as <br /> $\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i$.| variable | -- |
| Q.US1.002 | <a name="GeomMean_sample"></a> Geometric mean (sample) | -- | $\bar{x}_{geom}$ | The mean value of a given data sample *[x<sub>1</sub>,...,x<sub>n</sub>]*, with sample size n, calculated as <br /> $\bar{x}_{geom}=\sqrt[n]{\prod_{i=1}^{n}x_i}$| variable| -- |
| Q.US1.003 | <a name="Var"></a> Variance (sample) | -- | *s<sup>2</sup>* | Mean squared deviation of the mean of a given data set *[x<sub>1</sub>,...,x<sub>n</sub>]* with sample size *n* and mean value $\bar{x}$, calculated as <br /> $s^2=\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}$.| variable<sup>2</sup> | -- |
| Q.US1.004 | <a name="StdDev"></a> Standard deviation (sample)| -- | *s* | The standard deviation of the mean value of a given data set *[x<sub>1</sub>,...,x<sub>n</sub>]* with sample size *n* and mean value $\bar{x}$ , calculated as <br /> $s^2=\sqrt{\frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}}$. | variable | -- |
| Q.US1.005 | <a name="Median"></a> Median value (sample) | -- | *x<sub>median</sub>* | Centermost point $x_{\frac{n+1}{2}}$ of ordered data points $\left[x_{1}\leq x_{2}...\leq x_{n-1}\leq x_{n}\right]$ for an odd number of samples or the average of the two centermost points $\frac{x_{n/2}+x_{n/2+1}}{2}$ for an even number of samples. | variable | -- |
| Q.US1.006 | <a name="CoV"></a> Coefficient of variation (sample) | -- | CV | The standard deviation (sample) _s_ of a given data set divided by the mean value (sample) $\bar{x}$ same dataset (only applicable to ratio scaled variables), calculated as $CV=\frac{s}{\bar{x}}$ | variable | -- |
| Q.US1.007 | <a name="Avg"></a> Mean (population) | -- | $\mu _{x}$ | The mean is a parameter used to characterize the center of a population distribution of the quantity _x_. <br /> (Remark: For simplicity the subscript x can be omitted.) | variable | -- |
| Q.US1.008 | <a name="SEM"></a> Standard error of the mean | Standard error | SEM | The SEM quantifies how precisely the population mean $\mu _{x}$ is estimated from the sample mean. $\bar{x}$ of a sample of size _n_ : <br /> $SEM = \frac{s}{\sqrt{n}}$| variable | -- |
| Q.US1.009 | <a name="Var"></a> Variance (population) | -- | $\sigma_{x}^2$ | The variance is a parameter used to characterize the amount of variation or dispersion of a population distribution of the quantity _x_. <br /> (Remark: For simplicity the subscript x can be omitted.) | variable<sup>2</sup> | -- |
| Q.US1.010 | <a name="Std"></a> Standard deviation (population) | -- | $\sigma_{x}$ | The standard deviation is a parameter used to characterize the amount of variation or dispersion of a population distribution of the quantity _x_. <br /> (Remark: For simplicity the subscript x can be omitted.) | variable | -- |
| Q.US1.011 | <a name="EstVar"></a> Estimated variance (population) | -- | $\hat{\sigma_x^2}$ | The estimated variance of a population distribution of the quantity _x_. | variable | -- |
| Q.US1.012 | <a name="EstCvr"></a> Estimated covariance | -- | $\hat{\sigma_{xy}^2}$ | The estimated covariance of two quantities _x_ and _y_. | variable | -- |
| Q.US1.013 | <a name="Range"></a> Range | -- | r | The range of a dataset $\left[ x_1, ..., x_n \right]$ is given as $r = \left[ x_{min}, x_{max} \right]$ | variable | -- |
| Q.US1.014 | <a name="IQR"></a> Interquartal range | -- | IQR | The interquartile range of a data set $\left[ x_1, ..., x_n \right]$ is determined by dividing the ordered data into 4 equally sized groups with $\geq 25\%$ of values $\leq Q_1$ and $\geq 75\%$ of values $\leq Q_3$ and calculating $IQR=Q_3-Q_1$. | variable | -- |
| Q.US1.015 | <a name="GQV"></a> Gamma-quantile value | -- | $\gamma$ | The number $0 \leq \gamma \leq 1$ defining the $\gamma$-quantile. | -- | -- |
| Q.US1.016 | <a name="GQ"></a> Gamma-quantile | $\left( \gamma * 100\% \right)^{th}$ percentile | $f_\gamma$ | For $0 \leq \gamma \leq 1$, $f_\gamma$ is the $\gamma$-quantile of a distribution if $\gamma * 100\%$ of the values (distributed according to f) lie below $f_\gamma$ and $(1-\gamma) * 100\%$ of the values lie above it. | -- | -- |
| Q.US1.017 | <a name="PerRange"></a> Percentile range | -- | PR | The difference between two $\gamma$-quantiles $f_{\gamma_1} - f_{\gamma_2}$. | -- | -- |
| Q.US1.018 | <a name="CIP"></a> Confidence interval probability | -- | $\alpha$ | The probability $(1-\alpha)\%$ with which a confidence interval covers a population parameter. | -- | -- |
| Q.US1.019 | <a name="CI"></a> Confidence interval | -- | CI | The interval which contains a population parameters with a probability of $(1-\alpha)\%$. | -- | -- |
| Q.US1.020 | <a name="SNR"></a> Signal to noise ratio | -- | SNR | The mean value (sample) of a given data set $\bar{x}$ divided by the standard deviation (sample) _s_ from the same dataset: $\frac{\bar{x}}{s}$ | -- | -- |
| Q.US1.021 | <a name="CNR"></a> Contrast to noise ratio | -- | CNR | The absolute deviation of a given data value $f_1$ from another data value $f_2$, divided by the standard deviation _s_ (noise), all from the same data set: $\frac{\left\| f_1 - f_2 \right\|}{s}$ | -- | -- |
| Q.US1.022 | <a name="CR"></a> Contrast ratio | -- | CR | The absolute deviation of a given data value $f_1$ from another data value $f_2$, divided by the sum of the two data values: $\frac{\left\| f_1 - f_2 \right\|}{f_1 + f_2}$ | -- | -- |
| Q.US1.023 | <a name="SSE"></a> Sum of squared errors | -- | SSE | $SSE = \sum_{i=0}^{N}\left[ f(t_i) - f_{model}(t_i)\right]^2$, where _N_ is the number of samples, $f(t_i)$ measured value and $f_{model}(t_i)$ is the modeled value. This is valid for linear and non-linear least-squares optimization. | variable | -- |
| Q.US1.024 | <a name="GoFP"></a> Goodness-of-fit parameter | -- | $\chi^2$ | $\chi^2 = \frac{SSE}{\sigma_N^2}$, where $\sigma_N^2$ is the random noise variance. This is valid for linear and non-linear least-squares optimization. | -- | -- |
| Q.US1.025 | <a name="DoF"></a> Degrees of freedom | -- | _df_ | $N-p$, where _N_ is the number of samples and _p_ is the number of quantities to be determined e.g. model parameters. | -- | -- |
| Q.US1.026 | <a name="AIC"></a> Akaike-information-criterion | -- | AIC | $AIC = 2p + Nln(SSE)$, where _p_ is the number of model parameters, _N_ is the number of samples.<br /> This is valid for linear and non-linear least-squares optimization. | -- | -- |
| Q.US1.027 | <a name="JM"></a> Jacobian matrix | -- | _J_ | _J_ is a matrix of the first derivatives of a function _f(x)_ with respect to the parameters $p_1,...,p_n$: $J_{ij}(x) = \left[ \frac{df_j(x)}{dp_i} \right]$ | variable | -- |
| Q.US1.028 | <a name="HM"></a> Hessian matrix | -- | _H_ | _H_ is a matrix of the second derivatives of a function _f(x)_ with respect to the parameters $p_1,...,p_n$: $H_{ij}(x) = \frac{\partial^2f(x)}{\partial p_i \partial p_j}$ | variable | -- |
| Q.US1.029 | <a name="CovM"></a> Covariance matrix | -- | _Cov_ | $Cov = (J^T \cdot J)^{-1} \cdot \frac{SSE}{df}$ | variable | -- |
| Q.US1.030 | <a name="CRLB"></a> Cramer Rao lower bound | -- | CRLB | Lower bound on the variance of any unbiased estimator. | variable | -- |
| Q.US1.999 |  Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |



## <a name="Analytical inversion quantities"></a> Analytical inversion quantities

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.AI1.001 | <a name="AI_SMP"></a> Static model parameters | -- |SMP | A vector of the known quantities of a forward model. Select from section Q. | [variable units] | -- |
| Q.AI1.002 | <a name="AI_MP"></a> Model parameters | -- | MP | A vector of the quantities to be determined by the analytical inversion of a forward model. Select from section Q. | [variable units] |-- |
| Q.AI1.999 | <a name=""></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Optimization quantities"></a> Optimization quantities
In this group, quantities related to optimization methods are listed. In this version, only least squares optimization methods are considered. Approaches that use e.g. maximum likelihood estimation, bayesian inference, machine learning will be taken into account in future versions of the lexicon.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.OP1.001 | <a name="MP"></a> Model parameters | -- |$\phi$, MP | A vector of quantities which are the variable of the model fitting process. Select from section Q. | [variable units] | -- |
| Q.OP1.002 | <a name="SMP"></a> Static model parameters | --| $\theta$, SMP | A vector of the quantities of the forward model to be fitted which are not in the scope of the optimization. Select from section Q. | [variable units] | -- |
| Q.OP1.003 | <a name="EMP"></a> Estimated model parameter | -- | $\hat{\phi}$, EMP | A vector (in the same order as model parameters, indicated with “^”) of the estimated model parameters resulting from the optimization process. | [variable units] | -- |
| Q.OP1.004 | <a name="CostValue"></a> Cost value | -- | *C* | The scalar or vectorial value of a specified cost function. | [variable units] | -- |
| Q.OP1.005 | <a name="CostValue_min"></a> Cost value minimum | -- | $C_{opt}$| The minimum cost value as returned by an optimizer. This can be a local or global minimum. | [variable units] | -- |
| Q.OP1.006 | <a name="MP_init"></a> Initial model parameters | -- | $\phi_{init}$ | Vector of the starting values of the search for the model parameters. | [variable units] | -- |
| Q.OP1.007 | <a name="MP_L"></a> Model parameter lower bounds | -- | $\phi_{LB}$ | Vector of the lower bounds for the search for the model parameters. | [variable units] | -- |
| Q.OP1.008 | <a name="MP_U"></a> Model parameter upper bounds | -- | $\phi_{UB}$ | Vector of the upper bounds for the search for the model parameters. | [variable units]  | -- |
| Q.OP1.009 | <a name="Weights"></a> Data weights | -- | $\omega$ | Vector of weights on the measured values during the optimization process. | -- | -- |
| Q.OP1.010 | <a name="N_iter_max"></a> Maximum number of iterations | -- | $N_{it, max}$ | Largest number of steps taken in an iterative optimization. | - | -- |
| Q.OP1.011 | <a name="ConvThresh"></a> Convergence threshold | -- | *e* | Convergence threshold on the optimizer. | -- | -- |
| Q.OP1.012 | <a name="A"></a> Linear coefficients matrix | -- |*A* | A matrix with elements A<sub>ij</sub> with which a function linear in the model parameters  can be  expressed as $f(\phi;x_i)= \sum_{j=1}^{m}A_{ij}\phi_j$. <br />The $A_{ij}$ contain the data grid and the static model parameters.| -- | -- |
| Q.OP1.013 | <a name="Lambda"></a> Regularization parameter | -- | $\lambda$ | A parameter which determines the weight of the regularization in an optimization.  | -- | -- |
| Q.OP1.014 | <a name="Lambda_norm"></a> Normalized regularization parameter | -- | $\hat{\lambda}$ | The regularization parameter is expressed relative to the largest singular value &#963<sub>1</sub> of a SVD: $\hat{\lambda}=\frac{\lambda}{\sigma_1}$ .| -- | -- |
| Q.OP1.015 | <a name="Lambda_fixed"></a> Fixed $\lambda$ value | -- | $\lambda_{fixed}$ | A fixed value, e.g. a literature value, assumed as regularization parameter. | -- | -- |
| Q.OP1.999 | <a name="not listed OP1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |



## <a name="Native R1 estimation quantities"></a> Native R1 estimation quantities
This group lists quantities required in the context of native R1 estimation.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.NR1.001 | <a name="R10_fixed"></a> Fixed $R_{10}$ value | -- | $R_{10, fixed}$ | A fixed value, e.g. a literature value, assumed as native *R<sub>1</sub>* relaxation rate value.| 1/ms | [Haacke, et al. 2007](https://doi.org/10.1002/jmri.22987){:target="_blank"} |
| Q.NR1.999 | <a name="not listed NR1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Arterial input function estimation quantities"></a> Arterial input function estimation quantities
The items of this group are quantities which are required to describe arterial input function estimation methods.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.AE1.001 | <a name="kMeansParams"></a> *k*-means-cluster-algorithm-parameters | -- | *[k]* | Vector of ordered inputs to the *k*-means AIF detection algorithm. | [variable units] | -- |
| Q.AE1.002 | <a name="fuzzycMeansParams"></a> Fuzzy-c-means-cluster-algorithm-parameters | -- | *[m, $\epsilon$, c, P<sub>c</sub>, c<sub>i</sub>]* | Vector of ordered inputs to the fuzzy-c-means AIF detection algorithm. | [variable units] | -- |
| Q.AE1.003 | <a name="PVC"></a> Partial-volume corrected | -- | PVE | If the value of this flag is 1, partial volume effects are accounted for. Otherwise, or if not specified, no partial volume effect correction was done. | -- | -- |
| Q.AE1.004 | <a name="DB"></a> Dual Bolus | -- | DB | The full-dose AIF is reconstructed from pre-bolus injection with a smaller dose. If the value of this flag is 1, a dual bolus approach is used. Otherwise, or if not specified, no dual bolus approach is used. | -- | [Risse, et al. 2006](https://doi.org/10.1002/jmri.20747){:target="_blank"} |
| Q.AE1.005 | <a name="PA"></a> Arterial partial volume correction factor| -- | *P<sub>A</sub>* | A factor that scales signal or indicator concentrations measured in a partial volume affected artery such that partial volume effects are removed. Usually this is estimated by deconvolving arterial and venous signals or indicator concentrations. | -- | [Sourbron, et al. 2009](https://doi.org/10.1002/mrm.22005){:target="_blank"} |
| Q.AE1.999 | <a name="not listed AE1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


## <a name="Segmentation quantities"></a> Segmentation quantities
This group contains quantities related to the process of image segmentation.

| Code | OSIPI name| Alternative names|Notation|Description|OSIPI units|Reference|
| -- | -- | -- | -- | -- | -- | -- |
| Q.SE1.001 | <a name="BinMask"></a> Binary mask | -- | Mask | Binary mask of segmented region of interest. | -- | -- |
| Q.SE1.002 | <a name="BinAIFMask"></a> Binary AIF mask | -- | AIF mask | Binary mask of a vessel in which the arterial input function is estimated. | -- | -- |
| Q.SE1.003 | <a name="BinROIMask"></a> Binary ROI mask | -- | ROI mask | Binary mask of a tissue region of interest. | -- | -- |
| Q.SE1.004 | <a name="Seeds"></a> Seeds | -- | [seeds] | Vector of ordered voxel coordinates of seed points for seed based segmentation (e.g. region growing segmentation). | -- | -- |
| Q.SE1.005 | <a name="N_kMeans"></a> Number of k–means clusters | -- | *N<sub>k-means</sub>* | Number of clusters in the k-means clustering algorithm. | -- | -- |
| Q.SE1.999 | <a name="not listed SE1"></a> Quantity not listed | -- | -- | This is a custom free-text item, which can be used if a quantity of interest is not listed. Please state a literature reference and request the item to be added to the lexicon for future usage. | [variable] | -- |


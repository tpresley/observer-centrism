#!/usr/bin/env python3
"""Generate the holographic noise experimental brief PDF."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    HRFlowable, KeepTogether
)

OUTPUT = "/Users/troy/Documents/Displera/observer-centrism/holographic-noise-experimental-brief.pdf"

doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    topMargin=0.8*inch,
    bottomMargin=0.8*inch,
    leftMargin=1*inch,
    rightMargin=1*inch,
)

styles = getSampleStyleSheet()

# Custom styles
styles.add(ParagraphStyle(
    'DocTitle', parent=styles['Title'],
    fontSize=16, leading=20, spaceAfter=4, alignment=TA_CENTER,
    textColor=HexColor('#1a1a2e'),
))
styles.add(ParagraphStyle(
    'DocSubtitle', parent=styles['Normal'],
    fontSize=11, leading=14, spaceAfter=6, alignment=TA_CENTER,
    textColor=HexColor('#555555'), italic=True,
))
styles.add(ParagraphStyle(
    'Authors', parent=styles['Normal'],
    fontSize=10, leading=13, spaceAfter=16, alignment=TA_CENTER,
    textColor=HexColor('#333333'),
))
styles.add(ParagraphStyle(
    'SectionHead', parent=styles['Heading2'],
    fontSize=12, leading=15, spaceBefore=18, spaceAfter=8,
    textColor=HexColor('#1a1a2e'), borderWidth=0,
))
styles['BodyText'].fontSize = 10
styles['BodyText'].leading = 14
styles['BodyText'].spaceAfter = 8
styles['BodyText'].alignment = TA_JUSTIFY
styles.add(ParagraphStyle(
    'Equation', parent=styles['Normal'],
    fontSize=10, leading=14, spaceAfter=8, leftIndent=36,
    fontName='Courier',
))
styles.add(ParagraphStyle(
    'Abstract', parent=styles['Normal'],
    fontSize=9.5, leading=13, spaceAfter=12, alignment=TA_JUSTIFY,
    leftIndent=18, rightIndent=18, italic=True,
))
styles.add(ParagraphStyle(
    'SmallBody', parent=styles['Normal'],
    fontSize=9, leading=12, spaceAfter=6, alignment=TA_JUSTIFY,
))
styles['Bullet'].fontSize = 10
styles['Bullet'].leading = 14
styles['Bullet'].spaceAfter = 4
styles['Bullet'].leftIndent = 24

story = []

# Title block
story.append(Paragraph("Anisotropic Holographic Noise:<br/>A Testable Prediction with Specific Angular Structure", styles['DocTitle']))
story.append(Paragraph("Why the Holometer null result is consistent, and what measurement would be definitive", styles['DocSubtitle']))
story.append(Paragraph("Observer-Centrism Framework &mdash; observer-centrism.org", styles['Authors']))
story.append(HRFlowable(width="100%", thickness=1, color=HexColor('#cccccc')))
story.append(Spacer(1, 8))

# Abstract
story.append(Paragraph("<b>Abstract.</b> We present a specific, falsifiable prediction for holographic noise with anisotropic angular structure: the cross-correlation between two co-located Michelson interferometers at relative angle &beta; follows &Gamma;(&beta;) = cos &beta;. This differs fundamentally from isotropic holographic noise models (already ruled out by the Fermilab Holometer). The Holometer's null result at 90&deg; is not only consistent with this prediction &mdash; it is exactly what cos &beta; requires (&Gamma;(90&deg;) = 0). We specify the complete experimental signature and identify the critical measurement: cross-correlation as a function of interferometer angle, with the model-independent ratio &Gamma;(0&deg;)/&Gamma;(45&deg;) = &radic;2 as the decisive test.", styles['Abstract']))
story.append(HRFlowable(width="100%", thickness=0.5, color=HexColor('#dddddd')))
story.append(Spacer(1, 6))

# Section 1
story.append(Paragraph("1. The Prediction", styles['SectionHead']))
story.append(Paragraph("The framework predicts irreducible position uncertainty at the Planck scale manifesting as strain noise in interferometers. The single-arm strain power spectral density is:", styles['BodyText']))
story.append(Paragraph("S<sub>h</sub> = 2&alpha;<sub>H</sub> l<sub>P</sub> / c", styles['Equation']))
story.append(Paragraph("where &alpha;<sub>H</sub> = 1/4 (derived from the holographic entropy bound, not a free parameter), l<sub>P</sub> = 1.616 &times; 10<super>&minus;35</super> m is the Planck length, and c is the speed of light. Numerical values:", styles['BodyText']))
story.append(Paragraph("S<sub>h</sub> = l<sub>P</sub> / (2c) = 2.7 &times; 10<super>&minus;44</super> Hz<super>&minus;1</super>", styles['Equation']))
story.append(Paragraph("&radic;S<sub>h</sub> = 5.2 &times; 10<super>&minus;22</super> /&radic;Hz", styles['Equation']))
story.append(Paragraph("The spectrum is white (frequency-independent) for f &lt; c/(2L). The amplitude coefficient &alpha;<sub>H</sub> = 1/4 is derived from the Bekenstein-Hawking formula S = A/(4l<sub>P</sub><super>2</super>): the factor of 1/4 in the holographic bound directly determines the noise amplitude. This is not fitted &mdash; it is the unique value consistent with holographic entropy counting.", styles['BodyText']))

# Section 2
story.append(Paragraph("2. The Angular Structure", styles['SectionHead']))
story.append(Paragraph("The critical distinguishing feature is the overlap reduction function for two co-located Michelson interferometers at relative angle &beta;:", styles['BodyText']))
story.append(Paragraph("<b>&Gamma;(&beta;) = cos &beta;</b>", styles['Equation']))
story.append(Paragraph("This is <b>derived</b> (not assumed) from the Poisson statistics of the discrete Planck-scale causal structure, combined with the geometric projection of arm-aligned fluctuations. The underlying single-arm cross-correlation is &gamma;(&alpha;) = cos<super>2</super>(&alpha;/2), where &alpha; is the angle between two individual arms.", styles['BodyText']))

# Angular values table
angle_data = [
    ['Relative angle \u03b2', '\u0393(\u03b2)', 'Configuration'],
    ['0\u00b0', '1.00', 'Parallel (maximum correlation)'],
    ['30\u00b0', '0.87', ''],
    ['45\u00b0', '0.71', 'Key test angle'],
    ['60\u00b0', '0.50', 'LISA arm pairs'],
    ['90\u00b0', '0.00', 'Perpendicular (null \u2014 zero correlation)'],
]
t = Table(angle_data, colWidths=[1.5*inch, 1*inch, 3*inch])
t.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#e8eaf6')),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('TOPPADDING', (0, 0), (-1, -1), 4),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
]))
story.append(t)
story.append(Spacer(1, 8))

# Section 3
story.append(Paragraph("3. Why the Holometer Null Is Consistent", styles['SectionHead']))
story.append(Paragraph("The Fermilab Holometer operated two co-located 40-meter Michelson interferometers in the frequency range 1&ndash;13 MHz. Published constraint (95% CL): S<sub>L</sub> &lt; 8.4 &times; 10<super>&minus;41</super> m<super>2</super>/Hz.", styles['BodyText']))
story.append(Paragraph("The framework's predicted displacement PSD at L = 40 m:", styles['BodyText']))
story.append(Paragraph("S<sub>L</sub> = L<super>2</super> &times; 2&alpha;<sub>H</sub> l<sub>P</sub> / c = 4.3 &times; 10<super>&minus;41</super> m<super>2</super>/Hz", styles['Equation']))
story.append(Paragraph("This satisfies the Holometer bound: 4.3 &times; 10<super>&minus;41</super> &lt; 8.4 &times; 10<super>&minus;41</super>. The predicted amplitude is below the published upper limit.", styles['BodyText']))
story.append(Paragraph("<b>More importantly:</b> the Holometer's two interferometers were configured at 90&deg; (perpendicular). At this angle, the prediction gives &Gamma;(90&deg;) = cos 90&deg; = 0 &mdash; <b>zero cross-correlation</b>. The Holometer's null result is exactly what this model predicts. It was testing the one angle where the signal vanishes.", styles['BodyText']))
story.append(Paragraph("The Holometer result rules out isotropic holographic noise models (Hogan 2009) but is fully consistent with anisotropic cos &beta; noise.", styles['BodyText']))

# Section 4
story.append(Paragraph("4. The Definitive Test", styles['SectionHead']))
story.append(Paragraph("The critical measurement is the cross-correlation between two co-located Michelsons as a function of their relative angle &beta;.", styles['BodyText']))
story.append(Paragraph("<b>Required setup:</b> Two co-located power-recycled Michelson interferometers (the Holometer hardware suffices) with ability to rotate one interferometer relative to the other, or equivalently, measure at multiple fixed angles. Sensitivity to cross-correlate at the level of S<sub>h</sub> ~ 10<super>&minus;44</super> Hz<super>&minus;1</super>.", styles['BodyText']))

story.append(Paragraph("<b>The measurement protocol:</b>", styles['BodyText']))
story.append(Paragraph("1. Cross-correlate at &beta; = 0&deg; (parallel). Maximum signal if holographic noise exists.", styles['Bullet']))
story.append(Paragraph("2. Cross-correlate at &beta; = 45&deg;. Prediction: &Gamma;(45&deg;) = 1/&radic;2 &asymp; 0.71.", styles['Bullet']))
story.append(Paragraph("3. Cross-correlate at &beta; = 90&deg; (perpendicular). Prediction: &Gamma;(90&deg;) = 0 (null control).", styles['Bullet']))

story.append(Spacer(1, 6))
story.append(Paragraph("<b>Model-independent ratio</b> (does not depend on &alpha;<sub>H</sub> or the absolute amplitude):", styles['BodyText']))
story.append(Paragraph("<b>&Gamma;(0&deg;) / &Gamma;(45&deg;) = &radic;2 &asymp; 1.414</b>", styles['Equation']))
story.append(Paragraph("This ratio is the sharpest test. It depends only on the angular structure, not on the noise amplitude. If measured as &radic;2, the cos &beta; model is confirmed regardless of what &alpha;<sub>H</sub> turns out to be. If it deviates from &radic;2, the model is falsified.", styles['BodyText']))
story.append(Paragraph("<b>Null test:</b> &Gamma;(90&deg;) = 0. Any nonzero cross-correlation at 90&deg; falsifies cos &beta; and supports isotropic models.", styles['BodyText']))

# Section 5
story.append(Paragraph("5. Comparison with Other Models", styles['SectionHead']))
comp_data = [
    ['Model', '\u0393(\u03b2)', 'Status'],
    ['Isotropic (Hogan 2009)', 'Constant', 'Ruled out by Holometer'],
    ['cos \u03b2 (this prediction)', 'cos \u03b2', 'Consistent with Holometer null at 90\u00b0'],
    ['No holographic noise', '0', 'Consistent with Holometer; distinguished at \u03b2 \u2260 90\u00b0'],
]
t2 = Table(comp_data, colWidths=[1.7*inch, 0.9*inch, 3.4*inch])
t2.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#e8eaf6')),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, -1), 9),
    ('GRID', (0, 0), (-1, -1), 0.5, HexColor('#cccccc')),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('TOPPADDING', (0, 0), (-1, -1), 4),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 4),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
]))
story.append(t2)
story.append(Spacer(1, 6))
story.append(Paragraph("The cos &beta; model is the unique prediction that: (a) predicts zero at 90&deg; (consistent with the Holometer null); (b) predicts nonzero at 0&deg; (testable with parallel configuration); (c) has a specific angular dependence (testable by rotation); (d) derives the amplitude from the holographic bound (&alpha;<sub>H</sub> = 1/4, not fitted).", styles['BodyText']))

# Section 6
story.append(Paragraph("6. Relevance to Stochastic Background Searches", styles['SectionHead']))
story.append(Paragraph("The overlap reduction function &Gamma;(&beta;) = cos &beta; is the same mathematical object used in gravitational wave stochastic background analysis. For detector pairs at separation d:", styles['BodyText']))
story.append(Paragraph("&Gamma;(&beta;, f, d) = cos &beta; &times; sinc(2&pi;fd/c)", styles['Equation']))
story.append(Paragraph("For co-located detectors (d = 0), the sinc factor is unity and the pure angular dependence is measurable. For separated detectors (e.g., LIGO Hanford-Livingston, d &asymp; 3000 km), the coherence frequency is f<sub>coh</sub> &asymp; 16 Hz. Below this frequency, the angular correlation is preserved. Existing LIGO-Virgo-KAGRA stochastic background cross-correlation data at low frequencies may already contain information about this signal, though the Planck-scale amplitude makes detection extremely challenging at current sensitivity.", styles['BodyText']))
story.append(Paragraph("The most promising near-term test remains co-located interferometers with rotatable relative orientation &mdash; the Holometer configuration, modified to operate at non-perpendicular angles.", styles['BodyText']))

# Section 7
story.append(Paragraph("7. Derivation Summary", styles['SectionHead']))
story.append(Paragraph("<i>This section sketches the theoretical origin of the prediction for interested readers. Sections 1&ndash;6 above are self-contained &mdash; the experimental proposal can be evaluated entirely on its own terms without reference to the underlying framework.</i>", styles['SmallBody']))
story.append(Spacer(1, 4))
story.append(Paragraph("The prediction follows from three steps, each grounded in established mathematics:", styles['BodyText']))
story.append(Paragraph("1. <b>Planck-scale discreteness with Lorentz invariance.</b> If spacetime has a discrete structure at the Planck scale, Lorentz invariance uniquely selects Poisson statistics for the distribution of fundamental events (this is a standard result in causal set theory, independent of the specific framework).", styles['Bullet']))
story.append(Paragraph("2. <b>Geodesic variance from Poisson sprinkling.</b> A geodesic of length L traversing a Poisson-sprinkled causal set accumulates position variance &delta;L<super>2</super> = &alpha;<sub>H</sub> l<sub>P</sub> L by the central limit theorem. The holographic entropy bound S = A/(4l<sub>P</sub><super>2</super>) reduces the effective degrees of freedom by a factor of 1/4, giving &alpha;<sub>H</sub> = 1/4.", styles['Bullet']))
story.append(Paragraph("3. <b>Arm-aligned correlations.</b> The Planck-scale fluctuations are correlated along each interferometer arm (the arm samples a contiguous string of discrete elements) but independent between arms at different angles. The geometric projection of this directional correlation gives &gamma;(&alpha;) = cos<super>2</super>(&alpha;/2) per arm pair, combining to &Gamma;(&beta;) = cos &beta; for Michelsons.", styles['Bullet']))

story.append(Spacer(1, 12))
story.append(HRFlowable(width="100%", thickness=0.5, color=HexColor('#dddddd')))
story.append(Spacer(1, 8))

# Contact
story.append(Paragraph("Framework documentation: <link href='https://observer-centrism.org'>observer-centrism.org</link>", styles['SmallBody']))
story.append(Paragraph("Technical summary: <link href='https://observer-centrism.org/summary'>observer-centrism.org/summary</link>", styles['SmallBody']))
story.append(Paragraph("Holographic noise prediction: <link href='https://observer-centrism.org/predictions/holographic-noise'>observer-centrism.org/predictions/holographic-noise</link>", styles['SmallBody']))
story.append(Paragraph("Full derivation: <link href='https://observer-centrism.org/derivations/holography/causal-set-statistics'>observer-centrism.org/derivations/holography/causal-set-statistics</link>", styles['SmallBody']))

doc.build(story)
print(f"PDF generated: {OUTPUT}")

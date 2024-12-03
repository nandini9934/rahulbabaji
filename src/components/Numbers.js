import React from 'react';
import { Tooltip } from 'react-tooltip';

function Numbers() {
  const total = 43567;
  const urlList = [
    { name: 'Cancer', no: '456+' },
    { name: 'Kidney', no: '574+' },
    { name: 'Piles', no: '296+' },
    { name: 'Mental', no: '480+' },
    { name: 'Multiple Organ Failure', no: '320+' },
    { name: 'Auto-Immune Disease', no: '642+' },
    { name: 'Liver', no: '756+' },
    { name: 'ENT', no: '800+' },
    { name: 'Eye', no: '650+' },
    { name: 'Drug Abuse', no: '900+' },
    { name: 'Skin', no: '337+' },
    { name: 'Oral Issues', no: '867+' },
  ];
  const tool = [
    { Cancer: 'Skin Cancer', Kidney: 'Polycystic', Piles: 'Bleeding', Mental: 'Delusion', 'Multiple Organ Failure': 'Multiple Organ Dysfunction Syndrome', 'Auto-Immune Disease': 'Dermatomyositis', Liver: 'Cystic Liver', ENT: 'Discharge', Eye: 'Age Related', 'Drug Abuse': 'All Effects of Medicine', Skin: 'Acne', 'Oral Issues':'Oral Lichen Planus' },
    { Cancer: 'Blood Cancer', Kidney: 'Renal Cell Carcinoma', Piles: 'Fistula', Mental: 'Parkinson', 'Multiple Organ Failure': 'Lungs Collapse', 'Auto-Immune Disease': 'Graves Disease', Liver: 'Liver Cirrhosis', ENT: 'CSOM', Eye: 'Macular Degeneration Blepharitis', 'Drug Abuse': 'Inhalants', Skin: 'Pimple', 'Oral Issues':'Oral Submucous Fibrosis' },
    { Cancer: 'Lung Cancer', Kidney: 'High Creatinine', Piles: 'Itching', Mental: 'Appeal Atrophy', 'Multiple Organ Failure': 'Rhd Disease', 'Auto-Immune Disease': 'Inflammatory Bowel Disease', Liver: 'Gilbert Syndrome', ENT: 'Loss of Hearing', Eye: 'Glaucoma', 'Drug Abuse':'Alcohol', Skin: 'White Spot(Vitiligo}', 'Oral Issues':'Prevention' },
    { Cancer: 'Mouth Cancer', Kidney: 'Proteinuria', Piles: 'Feeling of Constipation', Mental: 'Migraine', 'Multiple Organ Failure': 'Septicemia', 'Auto-Immune Disease': 'Multiple Sclerosis', Liver: 'Fatty Liver', ENT: 'Tonsillitis', Eye: 'Conjuctivitis', 'Drug Abuse':'Methamphetamine', Skin: 'Blister', 'Oral Issues':'Oral Cancer' },
    { Cancer: 'Breast Cancer', Kidney: 'Cystitis', Piles: 'Burning and Severe Pain', Mental: 'Acute Paralysis', 'Auto-Immune Disease': 'Celiac Disease', Liver: 'Hepatitis A B C', ENT: 'Nosebleed', Eye: 'Eye Discharge', Skin: 'Allergy(Any Types)', 'Oral Issues':'Edentulism' },
    { Cancer: 'All Cancer', Kidney: 'Stones', Mental: 'Multiple Sclerosis', Liver: 'Hemochromatosis', ENT: 'Chronic Rhinosinusitis', Eye: 'Retinal Detachment', Skin: 'Rosacea' },
    { Kidney: 'Nephrotic Syndrome', Mental: 'G-B Syndrome', Liver: 'Jaundice Wilson Disease', Eye: 'Eye Cancer', Skin: 'Eczema' },
    { Kidney: 'Hydronephrosis', Eye: 'Twitching Eye', Skin: 'Psoriasis' },
    { Eye: 'Stye', Skin: 'Cellulitis' },
    {Skin: 'Measles'},
    {Skin: 'Chicken Pox'},
    {Skin: 'Ring Worm'},
    {Skin: 'Melasma'},
    {Skin: 'Impetigo'}
  ];
  return (
    <div className='container py-20'>
      <div className="headers mt-4">Total Patients Cured<br />{total}</div>
      <div className='row m-4' style={{ justifyContent: 'space-around' }}>
        {urlList.map((tempNo, index) => (
          <div key={index} className="my-anchor-element no col-12 col-xl-4 mb-4 p-4 d-flex justify-content-center align-items-center">
            <h4 data-tooltip-id={`tooltip-${index}`}>
              {tempNo.name}:<br />
              <div className='d-flex justify-content-center align-items-center'>{tempNo.no}</div>
            </h4>
            <Tooltip id={`tooltip-${index}`} place="right" effect="solid">
              {tool
                .filter(con => con[tempNo.name])
                .map((con, toolIndex) => (
                  <div key={toolIndex}>{con[tempNo.name]}</div>
                ))}
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Numbers;

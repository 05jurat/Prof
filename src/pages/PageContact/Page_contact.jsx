import './page_contact.scss';
import Header from '../../components/Header/Header_two';
import Link from '../../components/Links/Link_one';
import Footer from '../../components/Footer/Footer';
import Homes from '../../components/Homes/Homes';
import { useTranslation } from 'react-i18next';

function Page_contact() {
  const {t, i18n} = useTranslation();
  return (
    <div >
      
        <Header/>
        <Link/>
        <Homes/>   
        <p className='workkjhgf'>Ish vaqtimiz: Dushanba - Juma,</p>
        <img className='map' src="https://darakchi.uz/storage/9f/5d/37/81735/conversions/bRhbiEpLexWT_Sd6FZPnb_A119VS_veI-xl.jpg" alt="" /> 
        <div className='footr'>
          <Footer/>
        </div>

    </div>
  );
}

export default Page_contact;

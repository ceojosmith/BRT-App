/* ══════════════════════════════════════════════════════════════
   BOLDUMSAZ RADIO WE TELEWIDENIÝE — script.js  v4
══════════════════════════════════════════════════════════════ */
'use strict';

// ══ KITAPHANA — KITAP SAHYPALARY ═══════════════════════════════


// ══ PDF FILES ══════════════════════════════════════════════════

// ══ GÖZÜKDIRMELER DATA ══════════════════════════════════════════
const GZ_DATA = [
  { no:1,  title:'"Daşoguztelekom" WEAK-na işe girýänler üçin giriş.',                                                                                      gozNo:'1A',  text:'' },
  { no:2,  title:'Aragatnaşyk ulgamlarynyň, uçastoklarynyň, sehleriniň we bölümleriniň ýolbaşçylary hem-de işgärleri üçin zähmeti goramak, tehniki, ýangyn howpsuzlyk we önümçilik sanitariýa boýunça.',  gozNo:'1',   text:`Ýolbaşçylar zähmeti goramak, tehniki, elektrik, ýangyn howpsuzlyk we önümçilik sanitariýa ýagdaýy, önümçiligiň howpsuz iş şertlerini döretmek, zähmet hakyndaky kanunçylygynyň ýerine ýetirilmegi üçin inžener-tehniki işgärleriň, gullukçylaryň we işçileriň ýerine ýetirýän işine laýyklykda zähmeti goramagyň normalaryny, tehniki howpsuzlyk boýunça düzgünleri we instruksiýalary bilmegi we olaryň ýerine ýetirilmegi üçin jogapkärçilik çekýär.

OLAR ŞU AŞAKDAKYLARA BORÇLYDYRLAR:

1. Zähmet hakyndaly kanunçylygy, zähmeti goramagyň normalaryny we tehniki howpsuzlyk düzgünlerini bilmäge, ýerine ýetirilmegini hem-de olaryň doly ýerine ýetirilmegini üpjün etmäge hem-de ýerine ýetirmäge;

2. Öz uçastogynda ýokary howply işleriň sanawyny bilmäge;

3. Öz garamagyndaky işgärlerine, zähmetiň ähli görnüşlerine instruktaž işlerini geçirmek, olara işiň howpsuz ussularyny (metodlaryny) öwretmek hem-de degişli okuwlary boýunça işleri guramak, tehniki howpsuzlyk we önümçilik sanitariýasy boýunça düzgünleriň we instruksiýalarynyň ýerine ýetirilişine gözegçilik etmäge şeýle hem ýerine ýetirmäge;

4. Olara berkidilen bölümlerinde, sehlerinde we uçastoklarynda hem-de önümçilik we kömekçi otaglaryň bellenen tertipde saklanmagyny üpjün etmäge;

5. Enjamlaryň, gurallaryň, gorag serişdeleriniň, göteriji mehanizmleriň, ulag we ýük göteriji serişdeleriň, goraýyş-signal enjamlarnyň sazlygyny (abatlygyny), şeýle hem zähmet howpsuzlugy boýunça işleriň dogry guralyşyny üpjün etmäge;

6. Ähli işgärleriň, gullukçylaryň we beýleki adamlaryň ýangyna garşy göreş düzgünlerini berjaý edilişine, olara gözegçilik etmäge we ýerine ýetirmäge;

7. Ýangyn söndürüji we ýangyna garşy serişdeleriniň ýerleşýän ýerini, olaryň dolulygyny (komplektliligini) we şol serişdeleriniň bellenen maksatlar üçin peýdalanmazlygyny gazanmaga. Olaryň sazlaşykly saklanmagyna we hemişe ulanyşa taýýar bolup durmagyny üpjün etmäge;

8. Adatdan daşary ýagdaýda ýa-da ýangyn dörände adamlary we emlägi halas etmek üçin ewakuasiýa planyny işläp düzmäge, öwretmäge we ýerine ýetirmäge hem-de ony görnükli ýerde asyp goýmaga şeýle hem ýerine ýetirmäge;

9. Tiz ot alýan we partlama howply maddalaryň howpsuz daşalyşyny we ulanyşyny gözegçilik etmäge hem-de goramaga;

10. Olaryň garamagyndaky işgärleriň tehniki howpsuzlyk we önümçilik sanitariýa boýunça normalary, düzgünleri, instruksiýalary, buýruklary we görkezmeleri ýerine ýetirişine gözegçilik etmäge hem-de ýerine ýetirmäge;

11. Stanoklary, maşynlary, mehanizmleri, ulag serişdeleri we beýleki enjamlary möhüm gorag serişdeleri bilen üpjün etmäge, enjamlary gurnamagy ýa-da gaýtadan oturtmagy bellenen tertipde we tehniki howpsuzlyk düzgünleri boýunça geçirilmegine hem-de ýerine ýetirmegine;

12. Önümçilik we kömekçi otaglarynda, iş ýerlerinde howanyň ýagdaýyny wagtynda barlamaga we olarda gazlaryň, bugun we tozanyň konzentrasiýasynyň rugsat edilen çäkden ýokary bolmazlygy üçin çäreleri görmäge;

13. Gorag serişdeleriniň, predohranitel enjamlarnyň, göteriji mehanizmleriň we ulag serişdeleriniň, basyş bilen işleýän gurnamalaryň (ustanowkalaryň), şemalladyji-howa çalşyjy gurnamalaryň (ustanowkalaryň) we gaplaryň dogry ulanylmagyny hem-de öz wagtynda synagdan geçirilmegini üpjün etmegine hem-de ýerine ýetirmegine;

14. Ýerli iş şertleri hasaba almak bilen tehniki howpsuzlyk boýunça instruksiýalary ýazmaga ýa-da ýazmaga kömek etmäge we bellenen tertipde ylalaşylandan hem-de tassyklanandan soňra işgärleri tanyşdyrmak we üpjün etmäge, ýerine ýetirilmäge şeýle hem iş uçastoklaryň tehniki howpsuzlyk boýunça zerur plakatlar we duýduryjy ýazgylar bilen üpjün etmäge – işgärlerem olary ýerine ýetirmäge;

15. Işgärleri degişli ýörite iş geýimler we aýakgaplar, gorag serişdeleri, süýt, sabyn bilen üpjün etmäge, ýörite iş geýimleriň öz wagtynda ýuwulmagyny we abatlanmagyny guramaga – işgärlerem olary ýerine ýetirmäge;

16. Önümçilikde bolan betbagt hadysalary hasaba almak we derňemek hakyndaky düzgünnamany bilmäge we pugta berjaý etmäge, heläkçilikli ýagdaýlaryň ýüze çykmagynyň sebäplerini anyklamaga we önümçilikdäki şikeslenmäniň öňüni almak boýunça çäreler görmäge;

17. Önümçilik we kömekçi jaýlarda we iş ýerlerinde ýşyklandyrylyşyň, sandyramanyň (wibrasiýa), elektromagnit meýdanynyň naprýaženiyesiniň derejesini hereket edýän sanitar normasyna we düzgünlere laýyk getirmäge;

18. Enjamlaryň we gurluşlaryň howply ýerlerinde germewleriň barlygyna we öňüň ýagdaýyna, şemalladyji-howa çalşyjy gurnamalaryň (ustanowkalaryň) işleýşine, iş ýerleriniň kadaly ýagtylandyrylyşyny gözegçilik etmäge, şaggyldyny (şum) azaldylmagyny gazanmaga, akkumulýator sehinde kukurt kislotasynyň buglarynyň derejesiniň normanyň çäklerinde bolmagyny gazanmaga;

19. Iş ýerleriniň dogry we howpsuz guralmagyny, ynanylan iş uçastogynda arassaçylygy we tertip-düzgüni üpjün etmäge we ýerine ýetirmäge, iş ýerlerinde geçelgelerde, girelgelerde hapaçylyga ýol berilmezlige, enjamlaryň-iş gurallarynyň basylyp-çasyp ýatmagyna ýol bermezlige, jaýlaryň sanitariýa ýagdaýyna hem-de içilýän suw bilen üpjünçilige – işgärlerem olary ýerine ýetirmäge;

20. Işgärleriň saglygyna we janyna howp ýetirip biljek agregatlaryň, stanoklaryň we mehanizmleriň işini duruzmaga-togtatmaga, heläkçilik ýagdaýy düzetmek üçin gyssagly çäreler görmäge we bu barada ýokary guramalara hem-de kärdeşler arkalaşyklarynyň tehniki inženerine habar bermäge;

21. Iş wagtynda tehniki howpsuzlyk düzgünlerini we instruksiýalary bozýan işgärleri işden çetleşdirmäge we bu hakda kärhananyň (guramanyň) ýolbaşçyna habar bermäge;

22. Awtoulaglaryň, mehanizmleriň sazlygyna we ýükleýiş-düşüriş işleriniň geçirilişine gözegçilik etmäge;

23. Tehniki howpsuzlyk boýunça instruksiýalaryň, plakatlaryň we duýduryjy bellikleriň barlygyna we ulanyşyna gözegçilik etmäge – işgärlerem olary ýerine ýetirmäge;

24. Derman gutujyklarynyň (medapteçkalarynyň) bolmagyna we şikeslenmäniň bolan halatlarynda medisina kömegini berer ýaly serişdeleriň bolmagyna gözegçilik etmäge;

25. Betbagtçylyk hadysasy bolan halatynda medisina işgärleri gelýänçä heläkçilik çekene ilkinji medisina kömeginiň berilmegini we onuň keselhana ugradylmagyny guramaga, bolan waka hakynda kärhanyň ýolbaşçysyna habar bermäge;

26. Betbagtçylyk hadysany derňew işine gatnaşmaga we sebäplerini seljerip (analiz) kemçilikleriň soňuna çykmak üçin çäreler görmäge.` },
  { no:3,  title:'Ýangyn howpsuzlygyna jogapkär adamlar üçin ýangyn howpsuzlygyny üpjün etmek boýunça.',  gozNo:'2',  text:`1. Aragatnaşyk kärhanasynыň uçastoklarynyň we bölümleriniň ýolbaşçylary işçilerine we gullukçylaryna ýangyn howpsuzlygynyň düzgünlerini we ýangyn dörän ýagdaýynda hereket etmegiň düzgünlerini düşündirmelidir.

2. Aragatnaşyk kärhanasynyň bölüminiň, uçastogynyň aýratynlyklaryny hasaba almak bilen ýangyna garşy göreşmek boýunça instruksiýany işläp düzmäge gatnaşmalydyr we şol instruksiýalaryň öwrenilmegini guramalydyr.

3. Ýyladyjy enjamlaryň, peçleriň, wentilyasiýanyň saz işlemegini we ýüze çykan näsazlyklaryň düzetmegine gözegçilik etmelidir.

4. Iş tamamlananda hem-de smena tabşyrylanda jaýda we iş ýerlerinde ähli zatlar tertibe getirilmelidir, ýygnalmalydyr we süpürilmelidir, şeýle hem iş gutarandan soň nobatçy ýşykdan (awariýnaýa osweşeniýe) başga ähli elektrik setleriniň togy söndürülmelidir.

5. Önümçilik we durmuş hyzmaty otaglarynda we beýleki ýerlerde elde bejerilen peçlerden we suwuk ýangyçdan peýdalanmak gadagandyr, şeýle hem açyk tipdäki elektrik ýyladyjy enjamlardan peýdalanmak GADAGAN!!!

6. Kada laýyk gelýän (rugsat berilen) ýakylýan peçlere we beýleki ýyladyjy enjamlara hemişelik gözegçilik etmek üçin ýörite adamlar bellenmelidir.

7. Ähli işgärleriň, gullukçylaryň we beýleki adamlaryň ýangyna garşy göreş düzgünlerini berjaý edilişine gözegçilik etmelidir.

8. Ýangyna garşy göreşýän toparyň (družinanyň) we hemişelik hereket edýän ýangyn-tehniki iş toparynyň agzalaryna-kärhananyň gorag obýektlerinde, uçastogynda, bölümininde ýangyna garşy göreş kadalarynyň we düzgünleriniň bozulmalaryny nyň ýol berilmezligine we ýüze çykarylan kemçilikleri düzetmekde kömek bermelidir.

9. Ýangyn söndürüji we ýangyna garşy serişdeleriniň ýerleşýän ýerini, olaryň dolulygyny (komplektliligini) we şol serişdeleleriniň bellenen maksatlar üçin peýdalanmagyny gazanmalydyr. Olaryň sazlaşykly saklanmagyna we hemişe ulanyşa taýýar bolup durmagyny üpjün etmelidir.

10. Adatdan daşary ýagdaýda ýa-da ýangyn dörände adamlary we emlägi halas etmek üçin ewakuasiýa planyny işläp düzmeli, öwrenmeli hem-de ony görnükli ýerde asyp goýmaly.

11. Iş wagtynda ýangyn howpy dörän ýagdaýynda, haýal etmän hat-da işi wagtlaýynça togtatmaly hem-de howpuň öňüni almaly we 01 jaň etmeli.` },
  { no:4,  title:'Gaz enjamlary (priborlary) ulanylanda (eksplulatasiýasynda) tehniki howpsuzlyk boýunça.',  gozNo:'3',  text:`1. WEAK-nyň bölümlerinde we uçastoklarynda tebigy gazdan peýdalanylýan ýeri bar bolan ýagdaýynda gaz bilen işleýän enjamlaryň (priborlaryň) ýanynda, görnükli ýerinde gazdan we gaz enjamlardan howpsuz peýdalanmak boýunça instruksiýa asylyp goýulmalydyr.

2. Görkezilen desgalarda (obýektlerde) gaz howpsuzlygyna jogapkär adamlar gaz enjamlary (priborlary) ulanmak (ekspluatasiýa etmek) bilen meşgullanýan adamlar bilen gaz enjamlary (priborlary) howpsuz ulanmak boýunça öz wagtynda instruktaž geçirmäge borçludyr.

3. Hemişelik işlemäge niýetlenilen hem-de degişli awtomatika bilen üpjün edilen gaz priborlary we agregatlary gözegçiliksiz galdyrmak gadagandyr.

4. Suwuklandyrylan gaz bilen işleýän gaz balonly gurnamalarda (ustanowkalarda) balonyň wentili gaz enjamlaryndan (priborlaryndan) peýdalanyp balondan soňra ýapylap goýulmalydyr. Gaz balonlar sazlaýjysyz (reduktorsyz) ulanmak gadagan.

5. Ulanyjylara gaz berilmegi togtadylan badyna gaz plitalaryň gorelkalarynyň kranlaryny haýal edilmän ýapylmalydyr.

6. Gaz enjamlary (priborlary) oturdylan otaglar yzygiderli howasy çalşyrylyp, şemalladylyp durulmaly, aýnalaryň fortoçkalary açyk bolmalydyr.

7. Jaýyň içinde gazyň ysy çyksa, haýal etmän gaz enjamlardan (priborlardan) peýdalanmaklyk bes edilmelidir, aýnany açyp jaýy şemallatmaly, awariýa-bejeriş gullugyny (telefony-04) çagyrmaly, ot ýakmak, çilim çekmek, elektrik çyralary, priborlary işletmek, söndürmek hem-de elektrik enjamlardan peýdalanmak düýbinden gadagan, gaz enjamlaryň (priborlaryň) kranlaryň ýapyklygyny barlamaly.

8. Gaz enjamlardan (priborlardan) gazyň çykýanlygyny ot bilen ýakyp barlamak düýbinden gadagan. Gazyň çykýanlygyny diňe ýörite enjamlaryň (priborlaryň) ýa-da sabyn köpüklenen suw erginiň kömegi bilen barlamaly.

9. Gaz enjamlaryň (priborlaryň) we balonly gurnamalaryň (ustanowkalaryň) ýerini üýtgetmeklik diňe gaz hojalygy kärhanasynyň hünärmenleri tarapyndan geçirilmelidir.

10. Gaz enjamlaryň (priborlaryň) hem-de balonly gurnamalary (ustanowkalary) ulanmaklyk düzgünlerini bilmeýän adamlara gaz enjamlardan (priborlaryndan) peýdalanmak gadagan edilýär.

11. Suwuklandyrylan gazly we boşan balonlary jaýda saklamak gadagandyr, olar ýörite ammarlarda saklamalydyr.

12. Pelte (zapalnik) diňe ýanyp duran mahalynda peçleriň we beýleki gaz enjamlaryň (priborlaryň) gorelkalaryň kranyny açmaga rugsat edilýär. Gorelka ýanýan wagtynda ýalyn sönse, täzeden ýakmak üçin gorelkanyň krany ýapylmalydyr.

13. Gaz enjamlary (priborlary) näsaz bolan ýagdaýynda olardan peýdalanmak gadagandyr.

14. Azyndan aýda bir gezek gaz hojalygy kärhananyň işgärlerine hünärmenlerine gaz enjamlaryň tehniki taýdan sazlygy gözden geçirilmelidir.` },
  { no:5,  title:'Ýangyn söndürijileri peýdalanmak boýunça.',  gozNo:'4',  text:`UMUMY MAGLUMATLAR

Doldurylan ýangyn söndürijileriň görnüşlerine baglylykda, ýangyn söndürijiler ýangynyň bir ýa-da birnäçe görnüşini söndürmek üçin peýdalanylýar.

Edarada ulanylýan elde göterilýän ýangyn söndürijiler şu aşakdaky görnüşlere bölünýär:
- Poroşokly (OP);
- Kömürturşuly (OU);
- Howa-köpürjükli (OWP).

Ýangyn dörän ýa-da ýangyn döreme sypatlarnyň (tüsseleme, ýanyk ysy, temperaturanyň ýokarlanmasy we şm.) ýüze çykan ýagdaýynda edaranyň işgärleriniň hereketleri:
- Işi bes etmeli;
- Elektrik enjamlaryny öçürmeli;
- Bolan hadysa hakynda 01 telefon belgisi arkaly ýangyn goragy gullugyna habar bermeli we edaranyň salgysyny, ýangynyň dörän ýerini, öz familiýaňy aýtmaly;
- Adamlary halas etmek, ilkinji ot söndüriji serişdeleri bilen ýangyny söndürmek, haryt-maddy gymmatlyklary gorap saklamak üçin mümkin bolan çäreleri görmeli.

OT SÖNDÜRIJILERIŇ ULANYŞ AÝRATYNLYKLARY

Poroşokly ýangyn söndürijiler.

Poroşokly ot söndürijini 6 sekuntdan 15 sekunda çenli ulanyp bolýar.

Ýangyn poroşokly ot söndürijiniň kömegi bilen söndürilen ýagdaýynda, ýangyn poroşok buludy bilen örtülen dessine ýok edilýär, mundan hem başga, poroşok buludynyň ekranlaşdyrma häsiýeti bolup, ol ýanyp duran desganyň has golaýyna barmak mümkinçiligini döredýär.

Ýangyn söndürilip başlananda ýangynyň merkezine has golaý barmak bolmaýar, sebäbi poroşok çüwdüriminiň has ýokary tizligi netijesinde, howanyň güýçli gysylmasy bolup geçýär, bu bolsa oduň merkeziniň has-da giňemegine getiryär. Mundan hem başga, ýakyn aralykdan poroşokly ot söndüriji bilen ýangyn söndürilende, poroşogyň güýçli çüwdürimi bilen ýanýan zatlaryň zyňylmasynyň ýa-da syçramasynyň bolmagy ahmal, bu bolsa ýangynyň söndürilmegine däl-de, eýsem ýangynyň meýdanynyň giňelmegine getirip biler.

Poroşokly ot söndürijiler bilen 1000 W ýokary naprýaženýe astynda işleýän elektrik enjamlaryny söndürmeklige rugsat berilmeýär.

Elektron enjamlaryny poroşokly ot söndürijiler bilen öçürmeklige ýol berilmeýär. Sebäbi poroşok şol enjamlaryň arasyna, içine düşüp olary hatardan çykaryp bilýär.

Poroşokly ot söndürijiler ulanylanda tozanlaýandygy, munuň netijesinde ýanýan ody, basjak ýeriňi görmäniň kynlaşýandygy, şeýle hem dem alyş ýollaryna gyjyndyryjy täsir edýändigi sebäpli, olary kiçi göwrümli jaýlarda (40 m³-dan az) ulanmaklyk maslahat berilmeýär.

Kömürturşuly ot söndürijiler.

Kömürturşuly ot söndürijileri 10 kW naprýaženýeden ýokary naprýaženýede işleýän elektrik enjamlarynda ýangyn söndürilmegi üçin peýdalanamak gadagan edilýär.

Demir ugrukdyryjy trubkaly kömürturşuly ot söndürijileri bilen elektrik enjamlaryndaky ýangyny söndürmek gadagan edilýär.

Kömürturşuly ot söndürijileriň işlendik görhüşi bilen işlenende ugrukdyryjy trubkany elliksiz eliň bilen tutmak gadagan edilýär, sebäbi kömürturşy pürkülen wagtynda temperaturasy -60-70 °C sowuk bolup, gar görnüşli massa bölünip çykýar.

Kiçi otaglarda uzak wagtyň dowamynda kömürturşuly ot söndürijiler ulanylanda adamlaryň kömürturşydan zäherlenmesi bolup biler. Şonuň üçin hem kömürturşuly ot söndüriji ulanylandan soň, uly bolmadyk jaýlaryň ýelejiredilmegi zerur.

Kömürturşuly ot söndürijiler ulanmazdan öň, jaýyň içinde bar bolan adamlaryň sanynyň çäklendirilmegi zerur.

OT SÖNDÜRIJILERI ULANMAGYŇ DÜZGÜNLERI

Poroşokly ot söndüriji.

Elde göterilýän poroşokly ot söndürijileri ulanmak üçin ot söndürijini oduň merkezine golaý eltmeli, çaýkamaly we klini çekmeli. Soň 3-5 sekundyň dowamynda proboýnige (iňňeli knopka) basmaly. Soňra ryçaga basyp poroşogyň çüwdürimini oda tarap gönükdirmeli, munda şemalyň ugry hasaba alynmalydyr. Poroşogyň çüwdürmesini bes etmek üçin ryçagy goýbermek ýeterlikdir.

Arasyny üzmän, ýa-da arasyny üzüp ulanmaklyga rugsat berilýär.

Ot söndüriji poroşogyň çüwdürimini ýanyp duran oda 20-30° burç bilen gönükdirmeli.

Kömürturşuly ot söndürijiler.

Elde göterilýän kömürturşuly ot söndürijileri ulanmak üçin ot söndürijini oduň merkezine golaý eltmeli, plombany goparmaly we çekany çekmeli. Ugrukdyryjy trubkany operator üçin amatly ýagdaýda saklap, oda tarap gönükdirip ryçaga basmaly.

Ryçag goýberilen ýagdaýynda kömürturşy pürkmesini bes edýär.

OT SÖNDÜRIJILERDEN PEÝDALANMAGYŇ UMUMY TALAPLARY

Rugsat berilmeýär:
- Ot söndürijileriň korpusynda, basyş-goýberiş enjamynda, birikdiriji gaýkasynda ýemşermäniň, çişmäniň ýa-da jaýrygyň bar bolan ýagdaýynda, şeýle hem ot söndüriji öz-özünden suwuklyk goýberýän bolsa, basyş indikatornynyň näsazlygynda, ol ot söndürijini ulanmak gadagandyr;
- Ot söndürijileri ýyladyş enjamlarnyň golaýynda ýerleşdirmek, ballonlara gün şöhlesiniň göni düşmesine ýol bermek gadagandyr;
- Ot söndürijilere urup agram bermek gadagandyr;
- Ot söndürijiniň çüwdürimini adamlara tarap gönükdirmek gadagandyr.

ÝANGYN SÖNDÜRMEGIŇ UMUMY DÜZGÜNLERI

- Ýangyn söndürip başlamazdan öň, ýangynyň klasyny kesgitlemeli. Oduň söndürilmegi üçin has ýaramly bolan ot söndürijileri ulanmaly (ot söndürijiniň ýarlygynda görkezilenlere laýyklykda);
- Oduň ýele tarapyndan baryp, oduň gyrasyndan öçürip başlamaly we kemkemden merkezine tarap süýşmeli;
- Ýokardan ýanyp aşaklygyna akyp duran suwuklygy ýokardan aşaklygyna öçürmeli;
- Wertikal tekizlikde ýanyp duran ody ýokardan aşaklygyna söndürmeli;
- Ot söndüriji serişdeler köp bolan ýagdaýynda, olaryň baryny birden ulanmaly;
- E klasa degişli ýangynlarda, ot söndürijini elektrik enjamynyň golaýyna ot söndürijiniň ýarlygynda görkezilen aralygyndan golaý eltmeli däldir;
- Öçürilen oduň gaýtadan tutaşmazlygyna esewan ediň;
- Ulanylan ot söndürijini täzeden doldurmaga ugratmaly.` },
  { no:6,  title:'Edarada ýangyn howpsuzlygy boýunça.',  gozNo:'5',  text:`1. ÝANGYN HOWPSUZLYGY BOÝUNÇA UMUMY TALAPLAR

1.1. Edaranyň çägi hemişe arassa saklanmalydyr. Ýanyjy serişdeleriň galyndylaryny, guran otlary we ýere gaçan ýapraklary yzygiderli ýygnamaly we edaranyň çäkleriniň daşyna çykarmaly.

1.2. Halas ediş çykalgalaryny, tamburlary we basgançaklary zatlar bilen doldurmaly däl.

1.3. Edaranyň binasynda adamlaryň bar wagtynda halas ediş çykalgalarynyň gapylaryny diňe içinden, ýeňil açylýan ildirgiçleriň kömegi bilen ýapmaly.

1.4. Üçekleriň we tehniki jaýlaryň gapylary (lýuklary) hemişe gulp bilen ýapylan bolmaly.

1.5. Ýangyn kranlary şkaflara ýerleşdirilen ýeňlikler (nakoneçnikler) we niller bilen enjamlaşdyrylan bolmalydyr, şkaflar plombalanan bolmalydyr.

1.6. Içki ýangyna garşy suwgeçirijiniň ýangyna garşy kranlarynyň iş ukybynyň barlagy, ýylda iki sapardan (ýazda we güýzde) az bolmadyk möçberde, ýeňlikleri gaýtadan saramak arkaly geçirilmelidir.

1.7. Ýangyn awtomatika enjamlary awtomatik tertipde hemişe ulanyşykda bolmalydyr we gije-gündiziň dowamynda işe ukyply ýagdaýda saklanylmalydyr.

1.8. Ýangyn söndürijiler elýeterli ýerlerde, 1,5 metrde ýokary bolmadyk beýiklikde, ýyladyjy we gyzdyryjy enjamlardan daşyrakda ýereşdirilmelidir. Olaryň zaýalanmagyna, göni gün şöhleleriniň düşmegine ýol berilmeli däldir.

1.9. Näsaz ýagdaýyndaky elektrik geçirijileri we elektik enjamlary doly bejerilyänçä ulanmak gadagandyr.

1.10. Her bir gatda; ýangynyň emele gelen ýagdaýynda halas etmek üçin, ýolbaşçy tarapyndan tassyklanan halas ediş meýilnamasy asylyp goýlan bolmalydyr.

1.11. Koridoryň ugrunda we halas ediş çykalgalarynyň gapylarynda ugur görkeziji we howpsuzlyk nyşanlary bolmalydyr.

1.12. Iş wagty gutarandan soň edaranyň işgärleri özlerine berkidilen otaglary gözden geçirmelidirler we elektrik enjamlaryny öçürip gapyny ýapmalydyrlar.

2. GADAGAN EDILÝÄR

2.1. Edaranyň çäginde ot ýakmak, zir-zibilleri otlamak.

2.2. Edaranyň iş otaglarynda çilim çekmek.

2.3. Üçek jaýlarynda (çerdaklarda) geýim-gejimleri guratmak, ammarlary, arhiwleri we şm. ýerleşdirmek.

2.4. Edaranyň jaýlarynda hyzmat ediji işgärleriň we beýleki adamlaryň ýaşamagy.

2.5. Edaranyň jaýynda ýeňil ot alýan serişdeleri, ýangyç suwuklyklary we beýleki ot alyjy materiallary saklamak.

2.6. Diwarlary we potoloklary bezemek üçin ýanyjy serişdelerini ulanmak.

2.7. Westibýllaryň, hollaryň, koridoryň, tamburlaryň we basgançak gözenekleriniň taslamada göz öňünde tutulan gapylaryny aýyrmak.

2.8. Halas ediş çykalgalarynyň gapylaryny çüý bilen çüýlemek.

2.9. Elektrik ulgamyna birikdirilen elektrik enjamlaryny gözegçiliksiz galdyrmak.

2.10. Elektrik goragy hökmünde elde ýaşan goraýjylardan (predohranitellerden) (žuçoklardan) peýdalanmak.

2.11. Jaýlarda adamlaryň bar wagtynda, şeýle hem ýazmaça buýrugyň ýok wagtynda, edara jaýynda kebşirleme we ýangyn howply beýleki işleri geçirmek.

2.12. Jaýlarda benzin, kerosin we beýleki ýeňil ot alyjy we ýanyjy suwuklyklar ulanmak bilen arassalaýyş işlerini geçirmek, şeýle hem doňan turbalary açmak üçin açyk otdan we paýalnik lampalaryndan peýdalanmak gadagandyr.

3. ÝANGYN EMELE GELEN ÝAGDAÝYNDA EDILMELI HEREKETLER

3.1. Ýangyn dörändigi barada haýal etmän 01 telefon belgisi arkaly golaýdaky ýangyn bölümine habar bermeli.

3.2. Ýangyn barada adamlary gyssagly habarly etmeli we edaranyň ýolbaşçysyna ýa-da onuň orunbasaryna habar bermeli.

3.3. Ähli halas ediş çykalgalaryny açmaly we adamlary halas etmeli.

3.4. Binanyň içinden has gymmatbahaly emläkleri we resminamalary çykarmaly.

3.5. Jaýdan ýa-da binadan çykylanda, ýangynyň ýa-da tüssäniň beýleki jaýlarda ýaýramagynyň öňüni almak üçin, öz yzyňdan ähli gapylary we aýnalary ýapmaly, howa aýlanşygyny (wentilyasiýany) öçürmeli.

3.6. Meýletin ýangyn söndüriji topar, ot söndüriji serişdeleriniň kömegi bilen ýangyn söndürmeklige we öňüni almaklyga girişmeli.

3.7. Eletrik ulgamyny öçürmeli we halas ediş işlerine we ýangyn söndürmäge gatnaşýan adamlaryň üstüne üstüne gurnamalaryň gaçmazlygyny, ýangyn zäherli tüssesiniň we ýokary gyzgynlygyň, elektrik togunyň urmagynyň täsirinden adamlaryň howpsuzlygyny üpjün etmeli.` },
  { no:7,  title:'ATS-iň kabel şahtasynda işlände tehniki howpsuzlyk boýunça.',                                                                               gozNo:'6',   text:'' },
  { no:8,  title:'Kompressor-signal enjamlaryna (KSE) hyzmat edýän işgärler üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                              gozNo:'7',   text:'' },
  { no:9,  title:'ATS-iň krossynyň enjamlaryna hyzmat edýän elektromontýorlar we elektromehanikler üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',       gozNo:'8',   text:'' },
  { no:10, title:'Liniýa-apparat zalynda (LAZ) işlände tehniki howpsuzlyk boýunça.',                                                                          gozNo:'9',   text:'' },
  { no:11, title:'Sanly telefon stansiýada işlemekde zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                          gozNo:'10',  text:'' },
  { no:12, title:'Sanly telefon stansiýasynda kabel şahtasynda işlände zähmeti goramak we tehniki howpsuzlyk boýunça.',                                        gozNo:'11',  text:'' },
  { no:13, title:'Aragatnaşygyň liniýa desgalarynda (şäher elektrik aragatnaşyk ulgamlarynda, etrap elektrik aragatnaşyk ulgamlarynda we sehlerinde hem-de magistral aragatnaşyk tehniki ulgamlarynda) işleýän elektromontýorlar we elektromehanikler üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',  gozNo:'12',  text:'' },
  { no:14, title:'Dizel-generatorlara hyzmat edýänler üçin tehniki howpsuzlyk boýunça.',                                                                      gozNo:'13',  text:'' },
  { no:15, title:'Aragatnaşyk operatory üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                  gozNo:'14',  text:'' },
  { no:16, title:'Müşderler bilen gös-göni işleýän bölümler üçin tehniki howpsuzlyk boýunça.',                                                                gozNo:'14A', text:'' },
  { no:17, title:'Halkara aragatnaşygyň telefonisti üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                      gozNo:'15',  text:'' },
  { no:18, title:'Elektron telegraf aragatnaşygynyň stansiýa enjamlarnyň elektromontýorlary üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',              gozNo:'16',  text:'' },
  { no:19, title:'Telegrammalary gatnadýan poçtalýon üçin zähmeti goramak tehniki howpsuzlyk boýunça.',                                                        gozNo:'17',  text:'' },
  { no:20, title:'Akkumulýatorçy üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                         gozNo:'18',  text:'' },
  { no:21, title:'Elektrik enjamlaryna hyzmat etmek we abatlamak boýunça elektromontýorlar üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',               gozNo:'19',  text:'' },
  { no:22, title:'Nobatçy elektromontýorlar üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                              gozNo:'20',  text:'' },
  { no:23, title:'ŞTS-laryn OTS-laryn liniya-kabel hojalygyny gurmakda we ulanmakda howpsuzlyk tehnikasy boýunça.',                                            gozNo:'21',  text:'' },
  { no:24, title:'Paýlaýjy kabel şkafynda işleriň ýerine ýetirilmeginde zähmeti goramak we tehniki howpsuzlyk boýunça.',                                      gozNo:'22',  text:'' },
  { no:25, title:'Antençi-maçtaçy üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                       gozNo:'23',  text:'' },
  { no:26, title:'Radioýaýradyjy enjamlarda abatlama-öňüni alyş işleri geçirilende zähmeti goramak we tehniki howpsuzlyk boýunça.',                            gozNo:'24',  text:'' },
  { no:27, title:'Kabel telewideniýesiniň ulgamlaryna tehniki taýdan hyzmat edilende zähmeti goramak we tehniki howpsuzlyk boýunça.',                           gozNo:'25',  text:'' },
  { no:28, title:'Ammaryň müdiri üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                         gozNo:'26',  text:'' },
  { no:29, title:'Armaturçy üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                              gozNo:'27',  text:'' },
  { no:30, title:'Göçme merdiwanlar we basgançaklar ulanylanda zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                gozNo:'28',  text:'' },
  { no:31, title:'Materiallary (çig mallary, harytlary, zatlary, önümleri, gurnama we ölçeýji enjamlary) ýüklemek, düşürmek, ýerleşdirmek we saklamak işlerinde tehniki howpsuzlyk boýunça.',  gozNo:'29',  text:'' },
  { no:32, title:'Aragatnaşyk ulgamlarynda işleýän garawullar (nobatçylar) üçin tehniki howpsuzlyk boýunça.',                                                  gozNo:'30',  text:'' },
  { no:33, title:'Önümçilik we gulluk jaýlaryny süpüriji üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                 gozNo:'31',  text:'' },
  { no:34, title:'Howly süpüriji üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                         gozNo:'32',  text:'' },
  { no:35, title:'Bagban üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                                 gozNo:'33',  text:'' },
  { no:36, title:'Sakçylar (wahtýor) üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                     gozNo:'34',  text:'' },
  { no:37, title:'Ýyladyşhananyň operatory üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                               gozNo:'35',  text:'' },
  { no:38, title:'Süýümli-optiki aragatnaşyk kabellerinde işlenende zähmeti goramak we tehniki howpsuzlyk boýunça.',                                           gozNo:'36',  text:'' },
  { no:39, title:'Süýümli-optiki aragatnaşyk liniýalarynyň barlaghanasynda işler geçirilende zähmeti goramak we tehniki howpsuzlyk boýunça.',                  gozNo:'37',  text:'' },
  { no:40, title:'Aragatnaşyk ulgamynda hereket edýän (podwižnoý) düzümiň (sostawyň) enjamlaryna we tehniki ýagdaýyna bildirilyän tehniki howpsuzlyk talaplary.', gozNo:'38',  text:'' },
  { no:41, title:'Gurluşyk maşynlaryň we mehanizmleriň kömegi bilen binalary, desgalary ýykmak ýa-da sökmek işleriniň tehniki howpsuzlyk boýunça.',            gozNo:'39',  text:'' },
  { no:42, title:'Iş saparyna ugradylýan awtomobiliň sürüjisi üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                            gozNo:'40',  text:'' },
  { no:43, title:'Ýük awtoulagynyň sürüjisi üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                              gozNo:'41',  text:'' },
  { no:44, title:'Awtomobilleri abatlamak boýunça slesar üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                 gozNo:'42',  text:'' },
  { no:45, title:'Slesar-santehnik üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                       gozNo:'43',  text:'' },
  { no:46, title:'Ýeňil awtomobiliň sürüjisi üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                             gozNo:'44',  text:'' },
  { no:47, title:'Ýükleýiş-düşüriş işlerinde zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                  gozNo:'45',  text:'' },
  { no:48, title:'Traktorçy üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                              gozNo:'46',  text:'' },
  { no:49, title:'Elektrik we gaz bilen kebşirleýji üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                      gozNo:'47',  text:'' },
  { no:50, title:'Önümçilik barlaghanasynyn hünärmenleri üçin tehniki howpsuzlyk boýunça.',                                                                    gozNo:'48',  text:'' },
  { no:51, title:'Kerpiç örüjiler üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                        gozNo:'49',  text:'' },
  { no:52, title:'Mehanizmleriň kömegi bilen beton we demir-beton işlerinde, şeýle hem gurluşyk-montaz işlerinde tehniki howpsuzlyk boýunça.',                 gozNo:'50',  text:'' },
  { no:53, title:'Demir bilen işlenilýän tokar stanogynda işlenende zähmeti goramak we tehniki howpsuzlyk boýunça.',                                           gozNo:'51',  text:'' },
  { no:54, title:'Awtokranlaryň maşinisti (krançylar) üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                    gozNo:'52',  text:'' },
  { no:55, title:'Awtoulag diňiniň (awtowyşkanyň) sürüjisi üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                              gozNo:'53',  text:'' },
  { no:56, title:'Ýangyç daşaýan awtoulagyň sürüjisi üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                     gozNo:'54',  text:'' },
  { no:57, title:'Ekskawatoryň maşinisti üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                 gozNo:'55',  text:'' },
  { no:58, title:'Liftçi üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                                 gozNo:'56',  text:'' },
  { no:59, title:'Agaçlarda we pomostlarda işlenende zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                          gozNo:'57',  text:'' },
  { no:60, title:'Hereket edýän elektrik stansiýasynda işleriň ýerine ýetirilmeginde zähmeti goramak we tehniki howpsuzlyk boýunça.',                          gozNo:'58',  text:'' },
  { no:61, title:'Belentlikde işlemek üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                    gozNo:'',    text:'' },
  { no:62, title:'Kabel sütünlerinde işlenende zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                gozNo:'59',  text:'' },
  { no:63, title:'Gurluşykda reňkleýjiler üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                gozNo:'60',  text:'' },
  { no:64, title:'Aragatnaşyk kabelini toprakda geçirmekde we kabelgeçirijide (kabeleukladçik) işlenende zähmeti goramak we tehniki howpsuzlyk boýunça.',       gozNo:'61',  text:'' },  // corrected 62→61
  { no:65, title:'Hususy kompýuterde işlenende zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                gozNo:'63',  text:'' },
  { no:66, title:'Kabelçi-kebşirleýji üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                    gozNo:'64',  text:'' },
  { no:67, title:'Kabel liniýalarynyň, trassalarynyň ýagdaýlaryna gözegçilik edýän elektromontýor (gözegçi-obhodçik) üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',  gozNo:'65',  text:'' },
  { no:68, title:'Lukmançylyk nokadynda lukman we şepagat uýasy üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                          gozNo:'66',  text:'' },
  { no:69, title:'Jebir çekenlere ilkinji çenli kömegi bermegiň düzgünleri boýunça.',                                                                         gozNo:'67',  text:'' },
  { no:70, title:'Ýowar geçilende zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                             gozNo:'68',  text:'' },
  { no:71, title:'Edara işgärleri üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                        gozNo:'69',  text:'' },
  { no:72, title:'Neçjar (agaç ussasy) üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                   gozNo:'70',  text:'' },
  { no:73, title:'Suwagçylar üçin zähmeti goramak we tehniki howpsuzlyk boýunça.',                                                                             gozNo:'71',  text:'' },
  { no:74, title:'Elde göterilýän elektrik gurallary bilen işlemekde zähmeti goramak we tehniki howpsuzlyk boýunça.',                                          gozNo:'72',  text:'' },
];

// ══ SEARCH CONTENT ═════════════════════════════════════════════
const SEARCH_CONTENT = [
  { screen:'screen-wezipe',       title:'Wezipe borçlar',          text:'elektromontýor antenna signal howpsuzlyk tehniki borçlar gurnama montaj profilaktika' },
  { screen:'screen-gepleyar',     title:'Gepleýär Aşgabat!',       text:'radio aşgabat taryh gepleşik ýaýlym' },
  { screen:'screen-twhistory',    title:'TW Taryhy',               text:'telewideniýe taryh türkmen milli ösüş' },
  { screen:'screen-teleradio',    title:'Teleradioýaýlymlar',      text:'ýygylyk kanal analog dvb boldumsaz daşoguz' },
  { screen:'screen-gorkezmeler',  title:'Görkezmeler',             text:'görkezme tehniki' },
  { screen:'screen-gozukdirmeler',title:'Gözükdirmeler',           text:'gözükdirme' },
  { screen:'screen-gollanmalar',  title:'Kitaphana',               text:'kitap kanun zähmet telewideniýe gollanma okamak' },
  { screen:'screen-isgaryn',      title:'Işgäriň gollanmasy',      text:'elektronika tranzistor diod kondensator radio howpsuzlyk' },
  { screen:'screen-facts',        title:'Sen bulary bilýämidiň?!', text:'fakt geň maglumat radio telewideniýe' },
  { screen:'screen-quiz',         title:'Bilimiňi barla',          text:'quiz sorag jogap bilim' },
];

// ══ QUIZ SORAGLARY — 100 SORAG ═════════════════════════════════
const QUIZ_QUESTIONS = [
  // — RADIO WE TW TARYHY (5 sorag)
  { question:'Türkmenistanda ilkinji radiostansiýa haçan açyldy?', options:['1920','1927','1935','1945'], correctIndex:1 },
  { question:'"Gepleýär Aşgabat" sözleri bilen radio haçan işe başlady?', options:['1925','1927','1930','1940'], correctIndex:1 },
  { question:'Türkmenistanda ilkinji telewideniýe gepleşigi haçan ýaýlyma goýberildi?', options:['1954','1958','1963','1970'], correctIndex:1 },
  { question:'Türkmen milli radiosy 1998-nji ýylda haýsy gepleşigi ýaýlyma goýberdi?', options:['Miras','Çar tarapdan','Watan','Altyn asyr'], correctIndex:1 },
  { question:'Aşgabatdaky telewideniýe diňiniň beýikligi takmynan näçe metr?', options:['120m','211m','310m','450m'], correctIndex:1 },

  // — ELEKTRIK ESASLARY (5 sorag)
  { question:'Omuň kanuny nämäni aňladýar?', options:['U=I×R','P=U×I','Q=I²×R×t','W=P×t'], correctIndex:0 },
  { question:'1 kWh näçe J-a (Joule) deňdir?', options:['1000 J','3 600 000 J','360 000 J','100 000 J'], correctIndex:1 },
  { question:'Sinusoidal tok üçin güýç faktory (cos φ) iň ýokary bahasy näçe?', options:['0','0.5','0.707','1'], correctIndex:3 },
  { question:'Transformatoryň birlamçy we ikilenji sargyçlaryndaky naprýaženýe gatnaşygy nämä bagly?', options:['Tok güýjüne','Sargyç sanyna','Özwagşyna','Ýygylygyna'], correctIndex:1 },
  { question:'Üç fazaly togyň fazalarynyň arasynda näçe dereje tapawut bar?', options:['90°','120°','180°','360°'], correctIndex:1 },

  // — ÝARYMGEÇIRIJILER (5 sorag)
  { question:'p-n geçiriş nämeden ybarat?', options:['Iki metaldan','Iki ýarymgeçirijiden','Metaldan we ýarymgeçirijiden','Iki izolýatordan'], correctIndex:1 },
  { question:'Tranzistoryň esasy işleýiş düzgüni hangisi?', options:['Tok güçlendirmek','Naprýaženýe saklamak','Ýygylyk üýtgetmek','Tok bölmek'], correctIndex:0 },
  { question:'Kremniý diodynyň göni naprýaženýesi takmynan näçe?', options:['0.1-0.2 W','0.6-0.7 W','1.2-1.5 W','2.0-2.5 W'], correctIndex:1 },
  { question:'Zener diody esasan näme üçin ulanylýar?', options:['Tok güçlendirmek','Naprýaženýe stabilizasiýa','Ýygylyk köpeltmek','Signaly modulýasiýa'], correctIndex:1 },
  { question:'Tranzistorda β (beta) näme aňladýar?', options:['Naprýaženýe güýçlendirmesi','Tok güýçlendirmesi','Güýç sarp etmesi','Geçiriş ýygylygy'], correctIndex:1 },

  // — RADIOARAGATNAŞYK (5 sorag)
  { question:'AM modulýasiýasynda näme üýtgeýär?', options:['Ýygylygy','Fazasy','Amplitudasy','Togy'], correctIndex:2 },
  { question:'FM modulýasiýasynda näme üýtgeýär?', options:['Amplituda','Ýygylygy','Fazasy','Togy'], correctIndex:1 },
  { question:'Antennanyň boý uzynlygy 1/4 tolkun uzynlygyna deň bolsa, nähili antennasy?', options:['Dipol','Çarýek tolkun','Ýarym tolkun','Tam tolkun'], correctIndex:1 },
  { question:'SWR 1:1 näme aňladýar?', options:['Zynjyr açyk','Doly gabat geliş','Gysga utgaşma','Ýitgi köp'], correctIndex:1 },
  { question:'Supergeterodin kabul edijide nähili öwrüm ulanylýar?', options:['Direk güýçlendirme','Ýygylyk öwrümi','Faza öwrümi','Amplituda öwrümi'], correctIndex:1 },

  // — TELEWIDENIÝE (5 sorag)
  { question:'PAL reňkli TW ulgamynda bir sekuntda näçe kadr görkezilýär?', options:['24','25','30','50'], correctIndex:1 },
  { question:'DVB-T2 näme üçin ulanylýar?', options:['Analog ýaýlym','Sanly ýer TW ýaýlymy','Hemra ýaýlymy','Kabel ýaýlymy'], correctIndex:1 },
  { question:'TW gepleşiginde ses-surat gabat gelişi näme?', options:['Ses güýçlendirmesi','Ses-suratyň deň wagtda görünmegi','Suratyň ýiti bolmagy','Reňk sazlamasy'], correctIndex:1 },
  { question:'HDMI bilen näme geçirilýär?', options:['Diňe wideo','Diňe ses','Wideo we ses birlikde','Diňe sanly signal'], correctIndex:2 },
  { question:'TW monitorynda piksel nämedir?', options:['Ekranyň çerçiwesi','Iň kiçi surat elementi','Reňk filtri','Işyk güýji'], correctIndex:1 },

  // — HOWPSUZLYK (5 sorag)
  { question:'Elektrik zynjyrynda gorag üçin ilki nä ulanmaly?', options:['Zynjyr goragçysy (predohranitel)','Uly kabel','Uly transformator','Dürli ýer birikmesi'], correctIndex:0 },
  { question:'Elektrik urmasynda ilki näme etmeli?', options:['Suw sepmek','Zynjyry açmak','Dem beriş etmek','Keselhana jaň etmek'], correctIndex:1 },
  { question:'Ýyldyrymdan goramak üçin näme gurnalýar?', options:['Transformator','Ýyldyrym tutujy (molniýeotwoд)','Kondensator','Rezistor'], correctIndex:1 },
  { question:'Iş ýerinde elektrik enjamyny abatlamak üçin ilki näme etmeli?', options:['Togy açmaly','Abatlap soň öçürmeli','Suw bilen sowatmaly','Izolasiýa etmeli'], correctIndex:0 },
  { question:'Ýangyn söndürijini elektrik enjamynda ulanmak üçin haýsy görnüşi dogry?', options:['Suwly (OP)','Kömürturşuly (OU)','Köpükli','Islendigi'], correctIndex:1 },

  // — ÖLÇEG ENJAMLARY (5 sorag)
  { question:'Multimetr bilen naprýaženýe ölçeňde nähili birikdirilýär?', options:['Yzygiderli','Parallel','Islendik','Aýratyn zynjyrda'], correctIndex:1 },
  { question:'Ossilograf nämäni görkezýär?', options:['Tok güýjüni','Signalyň wagta görä üýtgemesini','Garşylygy','Güýji'], correctIndex:1 },
  { question:'Spektr analizatory nämäni ölçeýär?', options:['Tok wagtyna görä','Signalyň ýygylyk düzümini','Garşylyk üýtgemesini','Kuwwaty'], correctIndex:1 },
  { question:'Wattmetr näme ölçeýär?', options:['Naprýaženýe','Tok','Güýç (watt)','Garşylyk'], correctIndex:2 },
  { question:'Decibel (dB) nämäni ölçeýär?', options:['Tok güýjüni','Signallaryň güýç gatnaşygyny logarifmik görnüşde','Ýygylygy','Naprýaženýäni'], correctIndex:1 },

  // — ULGAMLAR WE STANDARTLAR (5 sorag)
  { question:'GSM nähili aragatnaşyk ulgamydyr?', options:['Süýümli optiki','Simsiz öýjükli telefon','Hemra aragatnaşyk','Kabel TW'], correctIndex:1 },
  { question:'IP protokolynda adres näçe bitden ybarat (IPv4)?', options:['16 bit','32 bit','64 bit','128 bit'], correctIndex:1 },
  { question:'Optiki süýümdäki signal nähili geçýär?', options:['Elektrik togy','Ýagtylyk (foton)','Radio tolkun','Magnit meýdan'], correctIndex:1 },
  { question:'TCP/IP modelinde näçe gat bar?', options:['2','3','4','7'], correctIndex:2 },
  { question:'DNS nämäni çözýär?', options:['IP adresi → MAC adresi','Domen adyny → IP adresi','IP → Fiziki adres','Port → IP'], correctIndex:1 },

  // — TÜRKMEN TW-RADIO SPESIFIK (5 sorag)
  { question:'Türkmenistanda haýsy TW ulgamy ulanylýar?', options:['NTSC','SECAM','PAL','DVB-T1'], correctIndex:2 },
  { question:'"Altyn asyr" TW kanaly haçan esaslandyryldy?', options:['1990','1997','2000','2005'], correctIndex:1 },
  { question:'Boldumsaz etrabynyň aragatnaşyk kärhanasy haýsy şäherde ýerleşýär?', options:['Aşgabat','Daşoguz','Boldumsaz','Türkmenbaşy'], correctIndex:2 },
  { question:'Türkmenistanda FM radio ýaýlymy haýsy ýygylyk aralagynda işleýär?', options:['530-1600 kHz','88-108 MHz','3-30 MHz','300-3000 MHz'], correctIndex:1 },
  { question:'Daşoguz welaýatynda TW we radionyň esasy geçiriş bekedi nirede ýerleşýär?', options:['Köneürgenç','Daşoguz','S.A.Nyýazow','Boldumsaz'], correctIndex:1 },

  // — GOŞMAÇA TEHNIKI (5 sorag)
  { question:'Koaksial kabeliň häsiýetli garşylygy adatça näçe Ohm?', options:['25 Ohm','50 Ohm','100 Ohm','200 Ohm'], correctIndex:1 },
  { question:'Ýarymgeçiriji lazeriň TW geçiriş ulgamynda näme üçin ulanylýar?', options:['Güýçlendirmek','Elektrik signalyny ýagtylyga öwürmek','Zynjyr goramak','Ýygylyk süzmek'], correctIndex:1 },
  { question:'OFDM modulýasiýasy haýsy ulgamda ulanylýar?', options:['Analog AM radio','DVB-T sanly TW','FM radio','Kabel internet'], correctIndex:1 },
  { question:'Duýgur (sensitivlik) kabul edijide nämäni aňladýar?', options:['Güýçlendiriş derejesini','Kabul edip bilýän iň kiçi signal güýjüni','Ýygylyk aralagyny','Garşylyk derejesini'], correctIndex:1 },
  { question:'Ferrit halka induktiwlik sargyçlarda näme üçin ulanylýar?', options:['Sowatmak üçin','Magnit geçirijiligini ýokarlandyrmak üçin','Izolýasiýa üçin','Garşylygy azaltmak üçin'], correctIndex:1 },
];


// ══ IŞGÄRIŇ GOLLANMASY — 200 SORAG ════════════════════════════
const ISGARYN_QA = [
  // ── ELEKTRIK ESASLARY (1-40)
  { cat:'elektronika', q:'Elektrik togy näme?', a:'Elektrik togy — elektrik zynjyryndaky zarýadly bölejikleriň (elektronlaryň) ugurly hereketi.' },
  { cat:'elektronika', q:'Naprýaženiýe näme we haýsy birlik bilen ölçenilýär?', a:'Naprýaženiýe — elektrik zarýadyny herekete getirýän güýç. Wolt (W) birlik bilen ölçenilýär.' },
  { cat:'elektronika', q:'Elektrik togy güýji haýsy birlik bilen ölçenilýär?', a:'Elektrik togy güýji Amper (A) birlik bilen ölçenilýär.' },
  { cat:'elektronika', q:'Om kanuny näme?', a:'Om kanuny: I = U/R — tok güýji naprýaženiýäniň garşylyga bölümine deňdir.' },
  { cat:'elektronika', q:'Elektrik garşylygy näme we nähili ölçenilýär?', a:'Garşylyk — elektrik togunyň geçmegine garşylyk görkezýän häsiýet. Om (Ω) birlik bilen ölçenilýär.' },
  { cat:'elektronika', q:'Elektrik güýji haýsy formula bilen hasaplanýar?', a:'Elektrik güýji P = U × I formulasy bilen hasaplanýar. Watt (Wt) birlik bilen ölçenilýär.' },
  { cat:'elektronika', q:'Yzygiderli zynjyrda garşylyklar nähili hasaplanýar?', a:'Yzygiderli zynjyrda umumy garşylyk garşylyklaryň jemine deňdir: R = R1 + R2 + R3.' },
  { cat:'elektronika', q:'Parallel zynjyrda garşylyklar nähili hasaplanýar?', a:'Parallel zynjyrda: 1/R = 1/R1 + 1/R2 + ... Umumy garşylyk iň kiçi garşylykdan hem kiçi bolýar.' },
  { cat:'elektronika', q:'Üýtgeýän tok (AC) bilen göni tok (DC) tapawudy näme?', a:'Göni tok (DC) bir ugurda akyp durar. Üýtgeýän tok (AC) yzygiderli ugry üýtgedýär. Türkmenistanda AC — 50 Hz, 220W.' },
  { cat:'elektronika', q:'Ýygylyk näme we haýsy birlik bilen ölçenilýär?', a:'Ýygylyk — sekuntdaky döwre sany. Gers (Hz) birlik bilen ölçenilýär.' },
  { cat:'elektronika', q:'Elektrik energiýasy haýsy formula bilen hasaplanýar?', a:'Energiýa: W = P × t (Wt-sagat ýa-da Joule) formulasy bilen hasaplanýar.' },
  { cat:'elektronika', q:'Elektrik açary (wyklýuçatel) näme?', a:'Elektrik açary — elektrik zynjyryny açmak ýa-da ýapmak üçin niýetlenen kommutasiýa enjamy.' },
  { cat:'elektronika', q:'Naprýaženiýe öwüriji (transformator) nähili işleýär?', a:'Naprýaženiýe öwüriji üýtgeýän toguň naprýaženiýesini ýokarlandyrýar ýa-da peseldýär. Elektromagnit täsire esaslanýar.' },
  { cat:'elektronika', q:'Garşylyk bölüji (rezistor) näme üçin ulanylýar?', a:'Garşylyk bölüji — zynjyrdaky naprýaženiýäni bölmek we togy çäklendirmek üçin ulanylýar.' },
  { cat:'elektronika', q:'Köpölçegli ölçeýji (multimetr) näme üçin ulanylýar?', a:'Köpölçegli ölçeýji — naprýaženiýe, tok güýji, garşylyk we käte ýygylyk ölçemek üçin ulanylýan enjam.' },
  { cat:'elektronika', q:'Gysga utgaşma näme we näme üçin howply?', a:'Gysga utgaşma — zynjyrda garşylyk bolmazdan fazanyň we nollaryň göni birleşmegi. Uly tok akyp, enjam zaýalanýar ýa-da ýanýar.' },
  { cat:'elektronika', q:'Zynjyr goragçysy (predohranitel) näme üçin oturdylýar?', a:'Zynjyr goragçysy — aşa uly tok akanda eräp zynjyry açýar we enjamlary goraýar.' },
  { cat:'elektronika', q:'Elektromagnit täsir näme?', a:'Elektromagnit täsir — elektrik togunyň magnit meýdan döretmegi. Motor, generator, naprýaženiýe öwüriji şu prinsipe esaslanýar.' },
  { cat:'elektronika', q:'Zynjyr platasy (PCB) näme?', a:'Zynjyr platasy — elektronik bölekleri birikdirýän basylan zynjyrly plata. Ähli elektron enjamynyň esasy bölegi.' },
  { cat:'elektronika', q:'Ýagtylyk beriji diod (LED) näme?', a:'Ýagtylyk beriji diod — tok geçende ýagtylyk berýän ýarymgeçiriji enjam. Az energiýa sarp edýär, uzak ömürlidir.' },
  { cat:'elektronika', q:'Tolkun görnüşi ölçeýji (oskilograf) näme üçin ulanylýar?', a:'Tolkun görnüşi ölçeýji — elektrik signalyny wagt boýunça ekranda görkezýän ölçeg enjamy. Signalyň şeklini, naprýaženiýesini we ýygylygyny barlamak üçin ulanylýar.' },
  { cat:'elektronika', q:'Sargynyň (katuška) induktiwlik täsiri näme?', a:'Sargy magnit meýdany saklamak ukybyna eýe. Bu ukup induktiwlik diýilýär we Genri (H) birlik bilen ölçenilýär.' },
  { cat:'elektronika', q:'Rezonans näme?', a:'Rezonans — zynjyryň sargy we zarýad saklaýjy täsirleri deňleşende, belli bir ýygylykda iň uly jogap berýän ýagdaýy.' },
  { cat:'elektronika', q:'Elektrik impulsy näme?', a:'Elektrik impulsy — gysga wagtlyk naprýaženiýe ýa-da tok üýtgemesi. Sanly ulgamlarda maglumatlary geçirmek üçin ulanylýar.' },
  { cat:'elektronika', q:'Topraklaýyş (zazemleniýe) näme üçin gerekli?', a:'Topraklaýyş — enjamyň metaldan ýasalan göwrümini ýer bilen birikdirmek. Tok urmagyndan goramak üçin hökmany zerur.' },
  { cat:'elektronika', q:'Elektrik zarýady näme we haýsy birlik bilen ölçenilýär?', a:'Elektrik zarýady — bölejikleriň elektrik häsiýeti. Kulon (Kl) birlik bilen ölçenilýär. Q = I × t.' },
  { cat:'elektronika', q:'Zarýad saklaýjy (kondensator) näme?', a:'Zarýad saklaýjy — iki geçiriji plita we olaryň arasynda geçirmeýän gatlag bolan enjam. Elektrik zarýadyny saklap bilýär.' },
  { cat:'elektronika', q:'Geçirmeýän madda (dielektrik) näme?', a:'Geçirmeýän madda — elektrik toguny geçirmeýän madda. Zarýad saklaýjylarda, kabel örtüginde we zynjyr platasynda ulanylýar.' },
  { cat:'elektronika', q:'Faraday kanuny näme?', a:'Faraday kanuny: sargydaky magnit meýdany üýtgände naprýaženiýe döreýär. Döreýän naprýaženiýe üýtgemegiň tizligine barabardyr.' },
  { cat:'elektronika', q:'Elektrik togunyň ýylylyk täsiri nähili peýdalanylýar?', a:'Elektrik togy geçirijide ýylylyk döredýär: P = I²R. Bu ýörelge gyzdyryjylarda, zynjyr goragçysynda we ütükde ulanylýar.' },
  { cat:'elektronika', q:'Açyk zynjyr we gysga zynjyr tapawudy näme?', a:'Açyk zynjyr: tok akmaýar, zynjyr kesilgi. Gysga zynjyr: garşylyk nol bolup, aşa uly tok akýar we enjam zaýalanýar.' },
  { cat:'elektronika', q:'Watt bilen Watt-sagat tapawudy näme?', a:'Watt — güýç birlimi. Watt-sagat — sarp edilen energiýa birlimi (güýç × wagt). Elektrik hasabynda kWt-sagat ulanylýar.' },
  { cat:'elektronika', q:'Üç fazaly tok ulgamynda naprýaženiýeler nähili?', a:'Üç fazaly ulgamda: faza-faza arasynda 380W, faza-nol arasynda 220W bolýar.' },
  { cat:'elektronika', q:'Güýç koeffisiýenti (cos φ) näme?', a:'Güýç koeffisiýenti — hakyky güýjüň doly güýje gatnaşygy. cos φ = 1 idealdyr. Sargyly ýükler cos φ-ni peseldýär.' },
  { cat:'elektronika', q:'Ferrit özenek näme üçin ulanylýar?', a:'Ferrit özenek — sargylar we naprýaženiýe öwürijilerde magnit meýdany güýçlendirmek üçin ulanylýar. Ýokary ýygylykda az ýitgi berýär.' },
  { cat:'elektronika', q:'Üç fazaly elektrik motorlary näme üçin has netijeli?', a:'Üç fazaly motorlar öz-özünden aýlanýar, has uly güýje eýe we bitewi güýç berýär. Senagat enjamlarynyň köpüsinde ulanylýar.' },
  { cat:'elektronika', q:'Reaktiw güýç näme?', a:'Reaktiw güýç — zarýad saklaýjylar we sargylar tarapyndan saklanýan we gaýtarylýan güýç. Hakyky iş edilmeýär, ýöne zynjyry ýükleýär.' },
  { cat:'elektronika', q:'Impuls giňligi modulýasiýasy (PWM) näme?', a:'Impuls giňligi modulýasiýasy — impulslaryň giňligini üýtgedip güýji sazlamak usuly. Motor tizligi we ýagtylyk sazlamakda ulanylýar.' },
  { cat:'elektronika', q:'Galwaniki izolýasiýa näme?', a:'Galwaniki izolýasiýa — iki zynjyryň arasynda göni elektrik baglanyşygynyň bolmazlygy. Naprýaženiýe öwüriji we optron bilen amala aşyrylýar.' },
  // ── ÝARYMGEÇIRIJILER (41-80)
  { cat:'yarimgeciriji', q:'Ýarymgeçiriji näme?', a:'Ýarymgeçiriji — geçirijiliği metallar bilen geçirmeýän maddalar arasyndaky madda. Mysal: kremniý (Si), germaniý (Ge).' },
  { cat:'yarimgeciriji', q:'Geçiriji diod näme we nähili işleýär?', a:'Geçiriji diod — togy diňe bir ugurda geçirýän ýarymgeçiriji enjam. Tok göni birikdirişde geçýär, tersine birikdirişde geçmeýär.' },
  { cat:'yarimgeciriji', q:'Üýtgeýän togy göni toga tekizlemek nähili edilýär?', a:'Tekizleme (rektifikasiýa) — geçiriji diodlar bilen üýtgeýän togy göni toga öwürmek işi. Ýarym ýa-da doly döwre tekizlemek mümkin.' },
  { cat:'yarimgeciriji', q:'Güýçlendiriji üçlüjik (tranzistor) näme?', a:'Güýçlendiriji üçlüjik — güýçlendiriji ýa-da elektrik açary hökmünde işleýän ýarymgeçiriji enjam. Bipolar we meýdan täsirli görnüşleri bar.' },
  { cat:'yarimgeciriji', q:'Bipolar üçlüjigiň 3 çykyşy näme diýilýär?', a:'Bipolar üçlüjigiň çykyşlary: Baza (B) — dolandyryjy, Kollektor (C) — çykyş, Emitter (E) — umumy çykyş.' },
  { cat:'yarimgeciriji', q:'Üçlüjik güýçlendiriji hökmünde nähili işleýär?', a:'Bazadaky kiçi tok Kollektor-Emitter arasynda uly toky dolandyrýar. Güýçlendiriş derejesi β = IC/IB.' },
  { cat:'yarimgeciriji', q:'Üçlüjik elektrik açary hökmünde nähili işleýär?', a:'Baza togy ýok — üçlüjik açyk (tok geçmeýär). Baza togy bar — üçlüjik ýapyk (tok geçýär). Sanly ulgamlaryň esasydyr.' },
  { cat:'yarimgeciriji', q:'Zarýad saklaýjy (kondensator) haýsy ýerlerde ulanylýar?', a:'Zarýad saklaýjy: süzgüçler, rezonans zynjyrlar, signallary birleşdirmek, ýygylyk saýlamak we güýç bölümlerinde ulanylýar.' },
  { cat:'yarimgeciriji', q:'Elektrolit we keramik zarýad saklaýjylaryň tapawudy näme?', a:'Elektrolit zarýad saklaýjy — polýarly, uly zarýad saklaýyş ukyby. Keramik zarýad saklaýjy — polýarsyz, kiçi, ýokary ýygylykda ulanylýar.' },
  { cat:'yarimgeciriji', q:'Naprýaženiýe durnuklaşdyryjy diod (Zener) näme?', a:'Naprýaženiýe durnuklaşdyryjy diod — belli bir naprýaženiýede tersine ugurda hem tok geçirýän ýörite diod. Naprýaženiýe durnuklaşdyryjylarda ulanylýar.' },
  { cat:'yarimgeciriji', q:'Ýagtylygy toka öwürýän diod (fotodiad) näme?', a:'Ýagtylygy toka öwürýän diod — ýagtylyk düşende tok öndürýän enjam. Gün batareýalarynda we ýagtylyk datçiklerinde ulanylýar.' },
  { cat:'yarimgeciriji', q:'Güýç açary (tiristor) näme?', a:'Güýç açary — uly toklar we ýokary naprýaženiýeler üçin niýetlenen ýarymgeçiriji açar. Güýç elektron ulgamlarynda ulanylýar.' },
  { cat:'yarimgeciriji', q:'Birleşik mikroshem (mikroçip) näme?', a:'Birleşik mikroshem — bir kremniý böleginde millionlarça üçlüjik, garşylyk bölüji we zarýad saklaýjy bilen ýasalan enjam.' },
  { cat:'yarimgeciriji', q:'N-tip we P-tip ýarymgeçirijileriň tapawudy näme?', a:'N-tip: artykmaç erkin elektron bar. P-tip: "boşluklar" bar. P-N utgaşma geçiriji diody döredýär.' },
  { cat:'yarimgeciriji', q:'Garşylyk bölüjiniň reňk zolaklar näme görkezýär?', a:'Garşylyk bölüjiniň üstündäki reňk zolaklar onuň garşylyk bahasyny görkezýär. Her reňk öz sanyna laýyk gelýär (gara=0, goňur=1, gyzyl=2 we ş.m.).' },
  { cat:'yarimgeciriji', q:'Üst lehimli bölekler (SMD) näme?', a:'Üst lehimli bölekler — zynjyr platasynda göni üstüne lehimlenýän kiçi elektronik bölekler. Deşik gerek däl, has kiçi bolup bilýär.' },
  { cat:'yarimgeciriji', q:'Işleýiş güýçlendiriji (Op-Amp) näme?', a:'Işleýiş güýçlendiriji — iki giriş arasyndaky naprýaženiýe tapawudyny güýçlendirýän birleşik mikroshem. Süzgüç we matematiki amallarda ulanylýar.' },
  { cat:'yarimgeciriji', q:'Lehim arassalaýjy (fliýus) näme üçin ulanylýar?', a:'Lehim arassalaýjy — lehimleme wagtynda metalyň oksid gatlagyny aýyrýar we lehimiň gowy ýapyşmagyny üpjün edýär.' },
  { cat:'yarimgeciriji', q:'Üçlüjigiň güýçlendiriş derejesi näme?', a:'Güýçlendiriş derejesi (β) — üçlüjigiň tok güýçlendiriş koeffisiýenti: β = IC/IB. Bazadaky kiçi tok kollektordaky uly togy dolandyrýar.' },
  { cat:'yarimgeciriji', q:'Statik zarýad goragy (ESD) näme üçin zerur?', a:'Statik elektrik zarýady kiçi ýarymgeçiriji bölekleriň içki gatlaklaryny ýakyp ýok edip bilýär. Şonuň üçin ESD goragy hökmany.' },
  { cat:'yarimgeciriji', q:'Üýtgeýän zarýad saklaýjy diod (warikaptor) näme?', a:'Üýtgeýän zarýad saklaýjy diod — naprýaženiýe baglylykda zarýad saklaýyş ukyby üýtgeýän enjam. FM radiolarda ýygylyk sazlamak üçin ulanylýar.' },
  { cat:'yarimgeciriji', q:'Meýdan täsirli üçlüjik (MOSFET) näme?', a:'Meýdan täsirli üçlüjik — derweze naprýaženiýe bilen dolandyrylýan enjam. Güýç elektronikasy we sanly zynjyrlarda giňden ulanylýar.' },
  { cat:'yarimgeciriji', q:'Ýarymgeçiriji bölekleri nädip barlamaly?', a:'Köpölçegli ölçeýji bilen: Geçiriji diod — göni we tersine garşylygy ölçemeli. Üçlüjik — baza-emitter we baza-kollektor utgaşmalaryny barlamaly.' },
  { cat:'yarimgeciriji', q:'Üçlüjigiň doly açyk ýagdaýy näme?', a:'Doly açyk ýagdaý — üçlüjigiň maksimal tok geçirýän ýagdaýy. Sanly zynjyrda "1" logiki derejesine laýyk gelýär.' },
  { cat:'yarimgeciriji', q:'Üçlüjigiň doly ýapyk ýagdaýy näme?', a:'Doly ýapyk ýagdaý — üçlüjigiň tok geçirmeýän ýagdaýy. Sanly zynjyrda "0" logiki derejesine laýyk gelýär.' },
  { cat:'yarimgeciriji', q:'Çalt açylýan diod (Şottky) adaty dioddan nähili tapawutly?', a:'Çalt açylýan diod — metal-ýarymgeçiriji utgaşma esasly. Açylma naprýaženiýesi 0.3W (adatky 0.6-0.7W), has çalt işleýär, ýokary ýygylykda ulanylýar.' },
  { cat:'yarimgeciriji', q:'Ýagtylyk duýgur üçlüjik (fototranzistor) näme?', a:'Ýagtylyk duýgur üçlüjik — ýagtylyk düşende tok akýan üçlüjik. Optiki izolýatorda we datçik ulgamlarynda ulanylýar.' },
  { cat:'yarimgeciriji', q:'Optiki izolýator (optron) näme?', a:'Optiki izolýator — ýagtylyk beriji diod we ýagtylyk duýgur üçlüjigi bir paketde birleşdirýän enjam. Zynjyrlary elektrikden izolýasiýa edip signal geçirýär.' },
  { cat:'yarimgeciriji', q:'Güýç üçlüjigi adaty üçlüjikden nähili tapawutly?', a:'Güýç üçlüjigi — uly toklar (onlarça Amper) we ýokary naprýaženiýeler üçin niýetlenen. Sowadyjy radiator ulanmak hökmany.' },
  { cat:'yarimgeciriji', q:'Geçiriji dioduň açylma naprýaženiýesi näme?', a:'Kremniý diodynda: 0.6-0.7W. Germaniý diodynda: 0.2-0.3W. Çalt açylýan diodda: 0.15-0.45W. Bu naprýaženiýe diod açylmak üçin zerur.' },
  { cat:'yarimgeciriji', q:'Ýarymgeçirijileri gatlamalama (doping) näme?', a:'Gatlamalama — kremniýe az mukdarda başga atom goşup N-tip ýa-da P-tip häsiýet bermek işi. Ähli ýarymgeçiriji enjamynyň esasy.' },
  { cat:'yarimgeciriji', q:'Logiki gapylar (WE, ÝA, ÝOK) nämä esaslanýar?', a:'Logiki gapylar üçlüjiklerden ýasalýar. WE (AND): ikisi hem "1" bolsa çykyş "1". ÝA (OR): biri "1" bolsa çykyş "1". ÝOK (NOT): tersine öwürýär.' },
  { cat:'yarimgeciriji', q:'Yzygiderli ikili güýçlendiriji (Darlington jübüti) näme?', a:'Yzygiderli ikili güýçlendiriji — iki bipolar üçlüjikden ybarat birikmäh. Güýçlendiriş derejesi ikisininkiniň hasylyna deňdir.' },
  { cat:'yarimgeciriji', q:'Elektron enjamlarynyň ýylylykdan zaýalanmagynyň öňüni nähili almaly?', a:'Sowadyjy radiator we sowadyjy fan oturtmaly. Enjamy ýyly ýerde saklamaly däl. Zynjyr ýükünden artyk işletmeli däl.' },
  { cat:'yarimgeciriji', q:'Galwaniki izolýasiýa näme üçin gerekli?', a:'Galwaniki izolýasiýa zynjyrlary birleşdirmezden signal geçirmäge mümkinçilik berýär. Howpsuzlyk we päsgelçilik sesini azaltmak üçin zerur.' },
  { cat:'yarimgeciriji', q:'Iki ugurly birleşik (IGBT) näme?', a:'Iki ugurly birleşik — meýdan täsirli üçlüjik giriş we bipolar üçlüjik çykyş häsiýetini birleşdirýän enjam. Güýç öwürüjilerde ulanylýar.' },
  { cat:'yarimgeciriji', q:'Ýarymgeçiriji enjamlary köpçülikleýin barlamakda nähili usul ulanylýar?', a:'Önümçilikde: awtomatik synag enjamlary, rentgen barlama we ýylylyk kamera ulanylýar. Sahada: köpölçegli ölçeýji we tolkun görnüşi ölçeýji.' },
  { cat:'yarimgeciriji', q:'Hall täsirli datçik näme?', a:'Hall täsirli datçik — magnit meýdan güýjüni ölçeýär. Motor enjamlarynda ornuň kesgitlemek we akym ölçemek üçin giňden ulanylýar.' },
  { cat:'yarimgeciriji', q:'Ýarymgeçiriji üçlüjigiň çykyş häsiýetnamasy näme görkezýär?', a:'Çykyş häsiýetnamasy (IC — UCE grafigi) üçlüjigiň işleýän nokadyny, doly açyk we doly ýapyk ýagdaýlaryny görkezýär.' },
  // ── RADIOARAGATNAŞYK (81-120)
  { cat:'radio', q:'Radio tolkun näme?', a:'Radio tolkun — elektromagnit tolkunynyň bir görnüşi. Ýaýlyma çykarylýan signal howadan geçip alyjylara ýetýär.' },
  { cat:'radio', q:'Amplituda modulýasiýasy (AM) näme?', a:'Amplituda modulýasiýasy — iberilýän signalyň amplitudasyny ses signalyna görä üýtgedýän usul. Uzak aralyga geçýär, emma päsgelçilik sesi köp.' },
  { cat:'radio', q:'Ýygylyk modulýasiýasy (FM) näme?', a:'Ýygylyk modulýasiýasy — iberilýän signalyň ýygylygyny ses signalyna görä üýtgedýän usul. Hil ýokary, päsgelçilik sesi az, aralygy AM-dan gysga.' },
  { cat:'radio', q:'Antenna näme üçin gerekli?', a:'Antenna — elektrik signalyny elektromagnit tolkuna ýa-da tersine öwürýän enjam. Iberiji we alyjy ulgamynyň aýrylmaz bölegi.' },
  { cat:'radio', q:'Antennanyň iň amatly uzynlygy nähili?', a:'Antennanyň uzynlygy tolkun uzynlygynyň dörtden biri ýa-da ýarymy bolmaly. Şeýdende signal iň güýçli alynýar ýa-da iberilýär.' },
  { cat:'radio', q:'Geçiriş kabeli (koaksial kabel) näme?', a:'Geçiriş kabeli — antenna bilen iberiji enjam arasyny birikdirýän ekranlanan ýörite kabel. Signal ýitgisini azaldýar.' },
  { cat:'radio', q:'Iberijiniň güýji nämä täsir edýär?', a:'Iberijiniň güýji ulaldygyça signalyň ýaýraýan aralygy artýar. Artykmaç güýç beýleki ýaýlymlara päsgelçilik berip biler.' },
  { cat:'radio', q:'Geçiriş kabeliniň garşylygy näme?', a:'TW we antenna ulgamlarynda 75 Om, radioaragatnaşyk enjamlarda 50 Om geçiriş kabeli ulanylýar.' },
  { cat:'radio', q:'Duran tolkun gatnaşygy (SWR) näme?', a:'Duran tolkun gatnaşygy — antennanyň zynjyr bilen gabat gelşiniň görkezijisi. 1:1 idealdyr. Uly gatnaşyk signal ýitgisine getirip biler.' },
  { cat:'radio', q:'Türkmenistanda FM ýaýlymy haýsy ýygylyk aralagynda işleýär?', a:'FM ýaýlymy 87.5 MHz bilen 108 MHz ýygylyk aralagynda işleýär.' },
  { cat:'radio', q:'UHF we VHF aralygynyň tapawudy näme?', a:'VHF (30-300 MHz) — uzak aralyga, uly antenna gerek. UHF (300 MHz — 3 GHz) — gysga aralyga, kiçi antenna. TW kanallar ikisini hem ulanýar.' },
  { cat:'radio', q:'Sanly ýer üsti ýaýlym standarty (DVB-T2) näme?', a:'Sanly ýer üsti ýaýlym standarty — bir ýygylykda birnäçe sanly kanal bermäge mümkinçilik berýär. Hili analog TW-dan has ýokarydyr.' },
  { cat:'radio', q:'Köp kanal birleşdirmesi (multipleks) näme?', a:'Köp kanal birleşdirmesi — birnäçe sanly kanal signalyny bir ýygylykda birleşdirip iberýän usul. Sanly ýaýlymda ulanylýar.' },
  { cat:'radio', q:'Signal öwüriji (modulýator) näme?', a:'Signal öwüriji — ses ýa-da wideo signaly radioýygylyk signalyna öwürýän enjam. Iberijiniň esasy bölegi.' },
  { cat:'radio', q:'Signal aýyryjy (demoduliator) näme?', a:'Signal aýyryjy — alnan radioýygylyk signalyndan asyl ses ýa-da wideo signalyny çykarýan enjam. Alyjynyň esasy bölegi.' },
  { cat:'radio', q:'Antennanyň signal gönükdiriş güýji näme?', a:'Antennanyň signal gönükdiriş güýji — antennanyň signaly belli bir ugra gönükdiriş derejesi. dBd ýa-da dBi birlik bilen ölçenilýär.' },
  { cat:'radio', q:'Elektromagnit ekranlaýyş näme üçin edilýär?', a:'Elektromagnit ekranlaýyş — daşyndaky päsgelçilik sesinden goramak üçin kabelleri we enjamlary metal bilen örtmek.' },
  { cat:'radio', q:'Ýygylyk gulplamasy (PLL) näme?', a:'Ýygylyk gulplamasy — ýygylyk durnuklaşdyryjy zynjyr. Iberijilerde we alyjylarda anyk ýygylykda işlemek üçin ulanylýar.' },
  { cat:'radio', q:'Ses ýygylyklary bilen radioýygylyklaryň tapawudy näme?', a:'Ses ýygylyklary 20 Hz — 20 000 Hz aralygynda. Radioýygylyklar MHz we GHz aralygynda. Ses ýygylyklary göni howada uzak aralyga gitmeýär.' },
  { cat:'radio', q:'Radioýaýlymy sazlamak (alignment) näme?', a:'Radioýaýlymy sazlamak — iberijini we alyjyny kesgitlenen ýygylykda, güýçde we hilde işlemegini üpjün etmek üçin geçirilýän sazlama işi.' },
  { cat:'radio', q:'Az päsgelçilikli güýçlendiriji (LNA) näme?', a:'Az päsgelçilikli güýçlendiriji — alyjyda gelen gowşak signaly az päsgelçilik sesi bilen güýçlendirýän enjam.' },
  { cat:'radio', q:'Ses bökdençligi (squelch) näme?', a:'Ses bökdençligi — gowşak ýa-da ýok signal wagtynda alyjynyň sesini awtomatik öçürýän ulgam. Päsgelçilik sesiniň öňüni alýar.' },
  { cat:'radio', q:'Awtomatik güýç sazlaýjy (AGC) näme?', a:'Awtomatik güýç sazlaýjy — alyjynyň giriş signal güýjüni awtomatik sazlaýan ulgam. Güýçli we gowşak signallarda deň ses bermek üçin ulanylýar.' },
  { cat:'radio', q:'Radio tolkun nähili ýaýraýar?', a:'Radio tolkun çyzykly ýaýraýar, ýöne ýerüsti tolkun we gök gatlak (ionosfer) şöhlenmesi ýaly usullar bilen uzak aralyga ýetip bilýär.' },
  { cat:'radio', q:'Näme üçin VHF/UHF ýaýlymynyň aralygy çäkli?', a:'VHF/UHF tolkynlar göni (göz haty boýunça) ýaýraýar, ionosferden şöhlemeýär. Şonuň üçin diňe görünýän hatardaky nokatlara ýetýär.' },
  { cat:'radio', q:'Radiogepleşik bekediniň esasy bölekleri näme?', a:'Mikrofon → ses güýçlendiriji → signal öwüriji → RF güýçlendiriji → süzgüç → antenna. Alyjyda bu yzygiderlilik tersine bolýar.' },
  { cat:'radio', q:'Ýygylyk spektry analizatory näme üçin ulanylýar?', a:'Ýygylyk spektry analizatory — signallaryň ýygylyk düzümini ekranda görkezýär. Päsgelçilikleri we ýaýlym hilini barlamak üçin ulanylýar.' },
  { cat:'radio', q:'Töwerekleýin antenna bilen ugruklanan antenna tapawudy näme?', a:'Töwerekleýin antenna — ähli ugra deňleýin signal iberýär. Ugruklanan antenna — belli bir ugra güýçli signal berýär, uzak aralyga amatlydyr.' },
  { cat:'radio', q:'Simmetriýalaýjy (balun) näme?', a:'Simmetriýalaýjy — simmetrik we simmetrik däl zynjyrlary birikdirýän enjam. Antennalarda päsgelçilik sesini azaltmak üçin ulanylýar.' },
  { cat:'radio', q:'Radioýygylyk güýçlendiriji näme?', a:'Radioýygylyk güýçlendiriji — radioýygylyk signalyny güýçlendirip antennanyň çykyş güýjüni artdyrýar. A, B, AB, C, D derejeli görnüşleri bar.' },
  { cat:'radio', q:'Ýygylyk zolagy ini (bandwidth) näme?', a:'Ýygylyk zolagy ini — ýaýlymyň işleýän ýygylyk aralygy. FM-da ±75 kHz, AM-da ±10 kHz. Uly zolak ini — has ýokary hil, ýöne köp ýygylyk tutýar.' },
  { cat:'radio', q:'Radioýaýlymda modulýasiýa derejesi näme?', a:'Modulýasiýa derejesi — ses signalyny nä derejede çuňlukda ýaýradylýandygyny görkezýär. AM-da 100% iň ýokary, FM-da Hz/W bilen ölçenilýär.' },
  { cat:'radio', q:'Iki ugurly süzgüç (diplekser) näme?', a:'Iki ugurly süzgüç — bir antennany iki dürli ýygylyk üçin ulanmaga mümkinçilik berýän enjam.' },
  { cat:'radio', q:'Ýygylyk öwürüji (konwerter) näme?', a:'Ýygylyk öwürüji — gelen radioýygylygy başga ýygylyga öwürýän enjam. Hemra alyjylarynda we radio alyjylarda ulanylýar.' },
  // ── TELEWIDENIÝE (121-160)
  { cat:'tv', q:'PAL, NTSC we SECAM tapawudy näme?', a:'Analog TW reňk kodlaşdyrma ulgamlary. PAL — Ýewropa we Türkmenistanda. NTSC — ABŞ-da. SECAM — Fransiýada ulanylýar. Häzir ählisi sanly TW bilen çalşyldy.' },
  { cat:'tv', q:'TW signalynda ýygylyk zolagy ini näçe?', a:'PAL ulgamynda TW signal zolagy 8 MHz giňligindedir. Ses we wideo signal birlikde iberilýär.' },
  { cat:'tv', q:'TW gepleşiginde kadrlaryň sany näçe bolmaly?', a:'PAL: 25 kadr/sekunt. NTSC: 30 kadr/sekunt. Sanly TW-da 25, 30, 50, 60 kadr bolup biler.' },
  { cat:'tv', q:'HD, Full HD we 4K çözgütleriniň tapawudy näme?', a:'HD: 1280×720 piksel. Full HD: 1920×1080 piksel. 4K (UHD): 3840×2160 piksel. Piksel sany köpeldikçe surat hili artýar.' },
  { cat:'tv', q:'TW ekranynyň ini-beýikligi gatnaşygy näme?', a:'Häzirki TW ekranlar 16:9 gatnaşygynda. Köne TW 4:3 gatnaşygyndady. Kino üçin 21:9 hem ulanylýar.' },
  { cat:'tv', q:'Sanly wideo aragatnaşyk (HDMI) näme?', a:'Sanly wideo aragatnaşyk — ýokary hilli wideo we ses signalyny bir kabel bilen geçirýän sanly aragatnaşyk usuly.' },
  { cat:'tv', q:'Sanly signal kabul ediji (resiwer) näme?', a:'Sanly signal kabul ediji — sanly TW signalyny kabul edip, ekrana görkezmäge mümkinçilik berýän enjam.' },
  { cat:'tv', q:'Hemra TW ulgamy nähili işleýär?', a:'Ýer iberijisi signal hemra iberýär, hemra ony ýere gaýtarýar. Disk antennasy signaly kabul edip sanly signal kabul edicä berýär.' },
  { cat:'tv', q:'TW ýaýlymynda ses signaly nähili iberilýär?', a:'Ses signaly wideo bilen bile ýa-da aýratyn ýygylykda sanly usulda (AC3, AAC) iberilýär.' },
  { cat:'tv', q:'Reňk çalyşdyryjy (chroma key) tehnikasy näme?', a:'Reňk çalyşdyryjy — ýaşyl ýa-da gök fon öňünde çekilen suratda fonuň başga surat bilen çalşylmagyny mümkin edýän tehnika.' },
  { cat:'tv', q:'TW diňiniň esasy wezipesi näme?', a:'TW diňi — antennany mümkin boldugyça beýige galdyryp, signalyň giň meýdana päsgelçiliksiz ýaýramagyny üpjün etmek.' },
  { cat:'tv', q:'Internet arkaly TW (IPTV) näme?', a:'Internet arkaly TW — internet protokoly arkaly TW gepleşiklerini bermek we kabul etmek ulgamy. Internet bolan ýerde elýeterlidir.' },
  { cat:'tv', q:'Hemra antennasyndaky pes päsgelçilikli blok (LNB) näme?', a:'Pes päsgelçilikli blok — disk antennasyndaky signal kabul edip öwürýän enjam. Hemra signalyny pese düşürip kabel bilen kabul edicä iberýär.' },
  { cat:'tv', q:'Sanly hemra TW standarty (DVB-S2) näme?', a:'Sanly hemra TW standarty — ýokary netijelilik, köp kanal, ýokary çözgütli ýaýlymlar üçin ulanylyýan häzirki zaman standarty.' },
  { cat:'tv', q:'Disk antennasynyň ölçegi nämä täsir edýär?', a:'Ölçeg ulaldygyça: signal güýji artýar, gowşak hemralary almak mümkin bolýar. Emma agram we ýeliň täsiri hem artýar.' },
  { cat:'tv', q:'TW studiosynda wideo geçiriji (switçer) näme?', a:'Wideo geçiriji — dürli kamera we wideo çeşmelerini saýlap ýaýlyma ibermäge mümkinçilik berýän enjam. Janly ýaýlymlarda möhümdir.' },
  { cat:'tv', q:'Analog TW bilen sanly TW tapawudy näme?', a:'Analog TW: tolkun görnüşinde iberilýär, hil uzaklykda pesýär. Sanly TW: san maglumat iberilýär, hil üýtgemeýär, bir ýygylykda köp kanal bolýar.' },
  { cat:'tv', q:'Wideo signalynda piksel näme?', a:'Piksel — ekrandaky iň kiçi surat birligi. Her piksel gyzyl-ýaşyl-gök (RGB) reňk bahalaryndan ybaratdyr. Piksel sany köpeldikçe hil artýar.' },
  { cat:'tv', q:'Wideo gysyjy-açyjy (kodek) näme?', a:'Wideo gysyjy-açyjy — wideo we ses maglumatlaryny gysyp we açyp berýän programma ýa-da enjam. MPEG-2, H.264, H.265 giňden ulanylýar.' },
  { cat:'tv', q:'Täze nesil wideo gysyjy (H.265/HEVC) näme?', a:'Täze nesil wideo gysyjy — öňki H.264-den 2 esse gowy gysyş berýär. 4K ýaýlymlar üçin möhüm, has az ýygylyk zolagy ulanýar.' },
  { cat:'tv', q:'TW studiosynda okyjy ekran (teleprompter) näme?', a:'Okyjy ekran — diktor kamera bakanda okaýan tekst ekrany. Kamera obýektiwiniň öňünde goýlan ýörite aýna arkaly işleýär.' },
  { cat:'tv', q:'Hünär sanly wideo aragatnaşyk (SDI) näme?', a:'Hünär sanly wideo aragatnaşyk — professional TW studiýalarynda wideo signalyny koaksial kabel arkaly geçirmek üçin ulanylýan standart.' },
  { cat:'tv', q:'"Çatyşdyrylan" we "yzygiderli" kadr geçiriş usullarynyň tapawudy näme?', a:'Çatyşdyrylan (interlaced): her kadrda dürli setirler görkezilýär (1080i). Yzygiderli (progressive): her kadrda ähli setirler görkezilýär (1080p). Yzygiderli has ýiti.' },
  { cat:'tv', q:'Ekrandaky maglumat (OSD) näme?', a:'Ekrandaky maglumat — wideo üstüne goşulýan menýu, ses derejesi, kanal belgisi ýaly maglumatlary görkezýän ulgam.' },
  { cat:'tv', q:'Signal paýlaýjy güýçlendiriji näme?', a:'Signal paýlaýjy güýçlendiriji — bir antenna signalyny birnäçe sanly signal kabul edicä deň güýçde paýlaýan enjam.' },
  { cat:'tv', q:'TW kamerasynda ak deňagramlylygy (white balance) näme?', a:'Ak deňagramlylygy — kameranyň reňkleri dogry görkezmegi üçin sazlanma. Günüň ýagtylygy we lampalar tapawutly reňk temperaturasyna eýe bolany üçin wajypdyr.' },
  { cat:'tv', q:'Geostasionar iş orbitasy näme?', a:'Geostasionar iş orbitasy — 36 000 km beýiklikdäki orbit. Bu beýiklikde hemra ýer bilen bir tizlikde aýlanýar — ýerden seredende hereketsiz görünýär.' },
  { cat:'tv', q:'TW antennasynyň polýarizasiýasy näme?', a:'Polýarizasiýa — antennanyň elektrik meýdanynyň ugry. Gorizontal we wertikal polýarizasiýa 30 dB izolýasiýa berýär. Hemra we ýer üsti ýaýlymlarynda ulanylýar.' },
  { cat:'tv', q:'TW gepleşiginde ses-surat gabat gelişi näme?', a:'Ses-surat gabat gelişi — ses we suratyň deň wagtda görkezilmegi. Gijikme ±40 ms-den uly bolsa duýulýar. TW önümçiliginde berk gözegçilik edilýär.' },
  { cat:'tv', q:'Elektron gepleşik gollanmasy (EPG) näme?', a:'Elektron gepleşik gollanmasy — sanly TW kabul edicisinde gepleşik tablisasyny ekranda görkezýän interaktiw gollanma.' },
  { cat:'tv', q:'TW ýaýlymy bökdençsizligini üpjün etmek üçin näme edilýär?', a:'Ätiýaçlyk iberijiler, bökdençsiz güýç beriş enjamy, generator, zapas antenna ulanylýar. Nobatçy işgärler yzygiderli gözegçilik edýär.' },
  // ── HOWPSUZLYK (161-200)
  { cat:'howpsuzlyk', q:'Elektrik togunyň adam bedenine täsiri nähili?', a:'10 mA — duýulýar. 25 mA — myşsa gysylmasy. 50-100 mA — ölüm howply. 0.1 A — ölüme ýol açyp biler.' },
  { cat:'howpsuzlyk', q:'Elektrik enjamynda işlemegiň esasy düzgüni näme?', a:'Enjamy toguň çeşmesinden doly aýyrmak. Enjamda tok bardygyny köpölçegli ölçeýji bilen barlamak. Soňra işe başlamak.' },
  { cat:'howpsuzlyk', q:'Topraklaýyş näme üçin gerekli?', a:'Topraklaýyş — enjamyň metal bölekleri ýer bilen birikdirip, tok urma howpuny aradan aýyrýar. Topraklaýyşsyz iş GADAGAN.' },
  { cat:'howpsuzlyk', q:'Ýokary naprýaženiýeli enjamda işlemezden öň näme etmeli?', a:'1. Togy öçüriň. 2. Öçürilendigini barlaň. 3. Zarýad saklaýjylary boşadyň. 4. Gorag egin-eşigini geýiň. 5. Ýeke işlemäň.' },
  { cat:'howpsuzlyk', q:'Elektrik enjamlaryna nähili yzygiderli gözegçilik edilýär?', a:'Yzygiderli: enjam gyzýarmy, ys gelýärmi, ötüşme yzy barmy, kabelleriň örtügi bitewimi barlamak gerekdir.' },
  { cat:'howpsuzlyk', q:'Elektrik ýangynynda nähili söndüriji ulanmaly?', a:'Diňe kömürturşy gaz (CO2) ýa-da tozan söndürijiler ulanmaly. SUW bilen söndürmek BERK GADAGAN — tok geçiriji!' },
  { cat:'howpsuzlyk', q:'Kabel aşa ýüklenende näme bolýar?', a:'Aşa ýüklemede kabel gyzýar, örtük eräp, gysga utgaşma we ýangyn döräp bilýär.' },
  { cat:'howpsuzlyk', q:'Elektrik işinde gerekli gorag egin-eşikleri näme?', a:'Geçirmeýän rezin ätikler we ellikler, ot geçirmeýän egin-eşik, kaska we gorag äýnek.' },
  { cat:'howpsuzlyk', q:'Tehniki howpsuzlyk žurnalyny doldurmak näme üçin wajyp?', a:'Žurnal — geçirilen işleriň, çalşylan bölekleriň we kemçilikleriň resmi taryhy. Jogapkärçiligi kesgitlemäge kömek edýär.' },
  { cat:'howpsuzlyk', q:'Beýiklikde işlemek üçin näme gerekli?', a:'Howpsuzlyk guşagy, kaska, howpsuzlyk zynjyry, berkidilen platforma. Ýeke beýiklikde işlemek BERK GADAGAN.' },
  { cat:'howpsuzlyk', q:'Enjamy uzak wagtlap ulanmazdan öň näme barlamaly?', a:'Örtügiň bütewligini, topraklaýyş birikişini, goragçylaryň ýagdaýyny, kabellerde zeper bardygyny barlamaly.' },
  { cat:'howpsuzlyk', q:'Elektrik işinde iki adam düzgüni näme?', a:'Ýokary howplu işlerde iki adam bilelikde işlemeli: biri işleýär, beýlekisi gözegçilik edýär we kömek bermäge taýýar durýar.' },
  { cat:'howpsuzlyk', q:'Iş ýerinde hökmany bolmaly gorag enjamlary näme?', a:'Ot söndüriji, gum gutusy, ewakuasiýa meýilnamasy we ilkinji kömek gutusy hökmany bolmalydyr.' },
  { cat:'howpsuzlyk', q:'Apparat otagynda howa çalşygy näme üçin wajyp?', a:'Elektron enjamlar ýylylyk öndürýär. Ýeterlik sowadylmasyz enjamlar aşa gyzap zaýa bolýar. Howa çalşygy enjamyň ömrüni uzaldýar.' },
  { cat:'howpsuzlyk', q:'Bökdençsiz güýç beriş (UPS) enjamy näme?', a:'Bökdençsiz güýç beriş enjamy — elektrik togy öçende akkumulýatordan wagtlaýyn tok berýän enjam. Enjamlaryň galp öçmezligi üçin wajyp.' },
  { cat:'howpsuzlyk', q:'Elektrik paneliniň golaýynda näme bolmaly däl?', a:'Ýanýan materiallar, suw çeşmeleri, ýapyk girelgeler ýa-da hereket etmegi kynlaşdyrýan päsgelçilikler bolmaly däl.' },
  { cat:'howpsuzlyk', q:'Işe başlamazdan öň geçirilýän howpsuzlyk gürrüňdeşligi näme?', a:'Howpsuzlyk gürrüňdeşligi — işe başlamazdan öň howpsuzlyk düzgünlerini ýatladyp, gol çektirmek. Kanuny talaplar boýunça hökmany.' },
  { cat:'howpsuzlyk', q:'Geçirmeýän örtügiň bütewligini nähili barlamaly?', a:'Mega-ommetr (megger) bilen ölçemeli. 1 MΩ-dan pes bolsa örtük zaýalanan, çalşylmaly.' },
  { cat:'howpsuzlyk', q:'Tok uranda ilkinji kömek nähili berilýär?', a:'Zynjyry derhal aç ýa-da geçirmeýän zat bilen tok çeşmesinden aýyr. Dem almaýan bolsa: ýasama dem we ýürek massažy başla. Tiz kömegi çagyr.' },
  { cat:'howpsuzlyk', q:'Ot söndürijiniň ulanyş tertibi näme?', a:'1. Möhüri çyk. 2. Şlangany ota gönükdir. 3. Sapany basyp tut. 4. Ody söndürýänçä dowam et.' },
  { cat:'howpsuzlyk', q:'Ýangyn ýüz berýän ýagdaýda ilki näme etmeli?', a:'1. Habar ber — ot söndürijileri çagyr. 2. Adamlary ewakuasiýa et. 3. Mümkin bolsa elektrik toguny öçür.' },
  { cat:'howpsuzlyk', q:'Geçirmeýän taýak (dielektrik taýak) näme üçin ulanylýar?', a:'Ýokary naprýaženiýeli zynjyrda işlände ýa-da tok urlan adamy aýyrmakda geçirmeýän taýak ulanylýar. Bedenin tok çeşmesi bilen baglanyşmagyny öňleýär.' },
  { cat:'howpsuzlyk', q:'Zarýad saklaýjydaky zarýady nädip howpsuz boşatmaly?', a:'Zarýad saklaýjyny zynjyrdan aýyr. Soňra pes garşylykly garşylyk bölüji arkaly ýuwaşlyk bilen boşat. Göni gysga utgaşma GADAGAN.' },
  { cat:'howpsuzlyk', q:'Statik zarýad goragyna (ESD) nähili üns bermeli?', a:'ESD bileklik dakynmaly, ESD mata düşek ulanmaly, bölekleri antistatik paketde saklamaly we topraklanmaly ýerde işlemeli.' },
  { cat:'howpsuzlyk', q:'Himiki galyndylar (batareýa, zarýad saklaýjy) nähili zyňylmaly?', a:'Batareýalar we zarýad saklaýjylar adaty zibil däl, ýörite himiki galyndylar toplama nokadyna tabşyrylmaly.' },
  { cat:'howpsuzlyk', q:'Ot söndürijileriň ýerleşdirilme düzgüni näme?', a:'Her 200 m² meýdan üçin bir ot söndüriji bolmaly. Giriş ýa-da çykyşa ýakyn, görünýän ýerde, erkin elýeterli bolmaly.' },
  { cat:'howpsuzlyk', q:'Elektrik işgäri nähili gorag egin-eşik geýmeli?', a:'Geçirmeýän ätikler we ellikler (naprýaženiýe derejesine görä), ot geçirmeýän egin-eşik, kaska, gorag äýnek we howpsuzlyk guşagy.' },
  { cat:'howpsuzlyk', q:'Açary ýa-da goragçyny çykaranyňda nähili bellik goýmaly?', a:'"Açmaň! Işçi bar!" ýazgyly duýduryş belgisi asylmaly. Bu başganyň zynjyry tötänden açmazlygy üçin zerur.' },
  { cat:'howpsuzlyk', q:'Zaýalanan kabel tapylanda nähili hereket edilýär?', a:'Zaýalanan kabel tapylsa iş dessine togtadylmaly, ýolbaşça habar berilmeli we kabel çalşylmanka enjam işletmeli däl.' },
  { cat:'howpsuzlyk', q:'Lehimleme işinde howpsuzlyk nähili üpjün edilýär?', a:'Lehimleme wakuumly ýa-da gowy howanlandyrylýan ýerde geçirilmeli. Gorag äýnek we ellik geýmeli. Lehim tüssesi zäherliji.' },
  { cat:'howpsuzlyk', q:'Generator işleýärkä nähili düzgün berjaý edilmeli?', a:'Generator açyk howada ýa-da gowy howanlandyrylýan jaýda işletmeli. Egzoz gazy zäherliji — içki jaýda GADAGAN. Topraklanmaly.' },
  { cat:'howpsuzlyk', q:'Elektrik paneline girmezden öň nähili çäre görmeli?', a:'Jogapkär ýolbaşçydan rugsat almak, işi ýazgy etmek, panel öňündäki ýeri arassalamak we gerek gurallary taýýarlamak.' },
  { cat:'howpsuzlyk', q:'Gaýtadan janlandyrma (reanimasiýa) näçe basyş we dem bermek gerek?', a:'Uly adamda döş üstüne 30 basyş (100-120/min.), soňra 2 dem bermek. Tiz kömek gelýänçä dowam et.' },
  { cat:'howpsuzlyk', q:'Enjam ýananda ilki näme etmeli?', a:'Ilki togy öçüriň. Soňra kömürturşy gaz ýa-da tozan söndüriji bilen söndüriň. Tok barkä suw GADAGAN.' },
  { cat:'howpsuzlyk', q:'Ýangyn howpsuzlygy boýunça ýyllyk synag näme?', a:'Ot söndürijileri ýyl boýunça barlap, hasabat ýazmaly. Ewakuasiýa meýilnamasyny täzelemeli. Işgärler bilen türgenleşik geçirmeli.' },
  { cat:'howpsuzlyk', q:'Ýokary naprýaženiýeli gurluşa ýakynlaşmakda howpsuz aralygy näme?', a:'Naprýaženiýä görä üýtgeýär: 6-10 kW üçin 0.6 m, 35 kW üçin 1 m, 110 kW üçin 1.5 m howpsuz aralygy saklamaly.' },
  { cat:'howpsuzlyk', q:'Elektromonter özbaşdak enjamy sökmeli däl — näme üçin?', a:'Örtügi zaýalanan ýer, zarýadly zarýad saklaýjylar, nädogry birikdirme — tok urma we ýangyn howpy döredip biler.' },
  { cat:'howpsuzlyk', q:'Kabel birikdirmelerini nähili barlap goramaly?', a:'Birikme nokatlary berkidilen, izolentlenen ýa-da klemma bilen berkidilen bolmaly. Açyk sim uçlary BERK GADAGAN.' },
  { cat:'yarimgeciriji', q:'Güýçlendiriş derejesi ýokary iki basgançakly birleşmäsi näme?', a:'İki bipolar üçlüjikden ybarat birleşme. Güýçlendiriş derejesi ikisininkiniň hasylydyr. Az tok bilen uly togy dolandyrmakda ulanylýar.' },
  { cat:'radio', q:'Goşa deňeşdirme (superheterodyn) alyjy nähili işleýär?', a:'Gelen radioýygylyk içki ýygylyk bilen garylyp, araçy ýygylyga öwrülýär. Bu usul alyjynyň duýgurlygyny we saýlawlylygyny ýokarlandyrýar.' },
  { cat:'radio', q:'Araçy ýygylyk (IF) näme?', a:'Araçy ýygylyk — superheterodyn alyjyda giriş radioýygylygynyň öwrülen pes ýygylygy. AM alyjyda adatça 455 kHz, FM alyjyda 10.7 MHz.' },
  { cat:'radio', q:'Radioýaýlymda päsgelçilik sesiniň çeşmeleri näme?', a:'Elektrik togy şebekesi, elektrik motorlary, ýyldyrym, beýleki radiobeketler we enjamyň öz ýylylyk täsiri päsgelçilik sesiniň çeşmeleri bolup bilýär.' },
  { cat:'radio', q:'Radiotolkunyň ýaýramagynda ionosfer näme roly oýnaýar?', a:'Ionosfer — atmosferanyň elektrikleşen gatlagy. Uzak tolkun (LW) we orta tolkun (MW) radioýygylyklary ionosferden şöhlenenip, uzak aralyga ýetýär.' },
  { cat:'radio', q:'Radiogepleşigiň ses hilini ölçemek üçin näme ulanylýar?', a:'Ses ölçeýji (audio analizator) ses signalynda päsgelçilik sesini, ýygylyk häsiýetnamasyny we ýoýulma derejesini ölçeýär.' },
  { cat:'tv', q:'TW ýaýlymynda suraty gysyş näme üçin gerekli?', a:'Gysylmadyk wideo maglumat örän uly ýer tutýar. MPEG-2 we H.264 ýaly gysyş usullary zolak inini we saklaýyş ýerini köp azaldýar.' },
  { cat:'tv', q:'Wideo gysyşda doly kadr (I-kadr) we tapawut kadr (P/B-kadr) näme?', a:'I-kadr: doly surat, az gysyş. P-kadr: öňki kadrdan tapawudy. B-kadr: öňki we soňky kadrdan tapawudy. P/B-kadrlar has güýçli gysyş berýär.' },
  { cat:'tv', q:'TW studiosynda ses garyşdyryjy (miksşer) näme?', a:'Ses garyşdyryjy — birnäçe ses çeşmesini birleşdirip hil derejeli ses çykaryş üçin ulanylýan enjam.' },
  { cat:'tv', q:'TW ýaýlymynda ses hilini barlamak üçin näme ulanylýar?', a:'Gulakgap monitory — sesçiniň ýaýlymda berlen sesi hakyky wagtda diňläp, hilini barlamagy üçin wajyp guraldyr.' },
  { cat:'howpsuzlyk', q:'Elektrik işinde howpsuz gulp (kilitleme) enjamy näme?', a:'Howpsuz gulp — tehniki hyzmat wagtynda zynjyry tötänden ýapmazlyk üçin elektrik açaryna goýulýan gulp. "Lockout/Tagout" usuly diýilýär.' },
  { cat:'howpsuzlyk', q:'Elektrik enjamy abatlananda näme üçin iki adam gerek?', a:'Enjamyň tötänden işe düşmeginiň öňüni almak, kömek etmek we gözegçilik etmek üçin iki adam bilelikde işlemek howpsuzlygy iki esse artdyrýar.' },
  { cat:'howpsuzlyk', q:'Ýangyn ewakuasiýa meýilnamasy näme?', a:'Ewakuasiýa meýilnamasy — ýangyn ýüz berende işgärleriň binadan çykyş ugurlaryny we ýygnanma nokadyny görkezýän plan. Görünýän ýerde asylmaly.' },
  { cat:'howpsuzlyk', q:'Elektrik enjamynda çygly ýerde işlemek näme üçin has howply?', a:'Çyglylyk geçirijiliği ýokarlandyrýar. Adam bedeni tok üçin has gowy ýol bolýar. Çygly ýerde pes naprýaženiýe ulanmaly ýa-da iş togtadylmaly.' },
  { cat:'howpsuzlyk', q:'Ot söndüriji serişde görnüşleri we ulanylýan ýerleri näme?', a:'CO2 (kömürturşy gaz) — elektrik ýangynlary. Tozan — köpugurly. Köpük — nebit önümleri. Her görnüş diňe öz maksadyna laýyk ulanylmaly.' },
  { cat:'howpsuzlyk', q:'Ýangyn diwary (brandmauer) näme üçin wajyp?', a:'Ýangyn diwary — ot ýaýramagynyň öňüni alýan berk gurluş. Tehniki we apparat otaglarynyň arasynda ýangyn diwary bolmaly.' },
  { cat:'elektronika', q:'Yzgider togunyň uzak aralyga geçirilmesinde artykmaçlygy näme?', a:'Yzgider tok naprýaženiýe öwüriji arkaly ýokary naprýaženiýä öwrülip, az ýitgi bilen uzak aralyga geçirilip bilýär. Şonuň üçin şebekelerde yzgider tok ulanylýar.' },
  { cat:'yarimgeciriji', q:'Bütewleşdirilen zynjyr (IC) ulanmakda nähili çäklendirmeler bar?', a:'IC: çäkli güýç çägi (aşa uly tok ýakýar), ýokary temperatura çägi (150°C-dan ýokary zaýalanýar), statik zarýada duýgur.' },
];

// ══ STATE ══════════════════════════════════════════════════════
let currentScreen   = 'screen-login';
let quizQuestions = [], quizIndex = 0, quizScore = 0, quizCombo = 0;
let quizTimerID = null, quizTimeLeft = 10;
const TIMER_CIRC = 163.36;


// ══ UTILS ══════════════════════════════════════════════════════
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function shuffle(arr) {
  for (let i = arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]];
  }
  return arr;
}

// ══ SPLASH ═════════════════════════════════════════════════════
function initSplash() {
  const splash = $('screen-splash');
  if (!splash) return;
  const cv = $('splashCanvas');
  if (cv) {
    const ctx = cv.getContext('2d');
    cv.width = window.innerWidth; cv.height = window.innerHeight;
    const stars = Array.from({length:180}, () => ({
      x: Math.random()*cv.width, y: Math.random()*cv.height,
      r: Math.random()*1.2+0.3, op: Math.random(),
      blink: Math.random()*0.02+0.005, dir: Math.random()>0.5?1:-1
    }));
    function drawSplash() {
      if (!document.getElementById('screen-splash') || splash.classList.contains('hidden')) return;
      ctx.clearRect(0,0,cv.width,cv.height);
      const g = ctx.createRadialGradient(cv.width/2,cv.height/2,0,cv.width/2,cv.height/2,Math.max(cv.width,cv.height)*0.7);
      g.addColorStop(0,'#0d1230'); g.addColorStop(1,'#050810');
      ctx.fillStyle=g; ctx.fillRect(0,0,cv.width,cv.height);
      stars.forEach(s => {
        s.op += s.blink*s.dir; if(s.op>1||s.op<0) s.dir*=-1;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
        ctx.fillStyle='rgba(200,225,255,'+Math.max(0,Math.min(1,s.op))+')'; ctx.fill();
      });
      requestAnimationFrame(drawSplash);
    }
    drawSplash();
  }
  setTimeout(() => splash.classList.add('hidden'), 4000);
}

// ══ CONFETTI ═══════════════════════════════════════════════════
function launchConfetti() {
  const canvas = $('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const colors = ['#ff6b6b','#ffd740','#00d4ff','#69f0ae','#ea80fc','#ff9800','#1565c0'];
  const pieces = Array.from({length:120}, () => ({
    x: Math.random()*canvas.width, y: -20,
    w: Math.random()*10+5, h: Math.random()*6+3,
    color: colors[Math.floor(Math.random()*colors.length)],
    rot: Math.random()*360, rotSpd: (Math.random()-0.5)*8,
    spd: Math.random()*4+2, drift: (Math.random()-0.5)*2, alpha: 1
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let alive = false;
    pieces.forEach(p => {
      if(p.alpha <= 0) return; alive = true;
      p.y += p.spd; p.x += p.drift; p.rot += p.rotSpd;
      if(p.y > canvas.height * 0.8) p.alpha -= 0.02;
      ctx.save(); ctx.globalAlpha = Math.max(0,p.alpha);
      ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    frame++;
    if(alive && frame < 300) requestAnimationFrame(draw);
    else ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  draw();
}

// ══ GUTLAG ═════════════════════════════════════════════════════
function checkHoliday() {
  const now = new Date();
  const m = now.getMonth()+1, d = now.getDate();
  let holiday = null;
  if (m===2 && d===13) {
    holiday = { emoji:'📻🎉', title:'Bütindünýä radio güni!', text:'Bu gün — 13-nji fewral — Bütindünýä radio günüdir! Sizi bu ajaýyp baýram bilen gutlaýarys! Radio — adamlary birleşdirýän güýç!' };
  } else if (m===11 && d===21) {
    holiday = { emoji:'📺🎊', title:'Bütindünýä telewideniýe güni!', text:'Bu gün — 21-nji noýabr — Bütindünýä telewideniýe günüdir! Sizi bu şanly baýram bilen gutlaýarys!' };
  }
  if (!holiday) return;
  const shown = localStorage.getItem('brt_holiday_'+m+'_'+d);
  if (shown) return;
  setTimeout(() => {
    $('holiday-emoji').textContent = holiday.emoji;
    $('holiday-title').textContent = holiday.title;
    $('holiday-text').textContent  = holiday.text;
    $('holiday-modal').classList.remove('hidden');
    launchConfetti();
    localStorage.setItem('brt_holiday_'+m+'_'+d, '1');
  }, 3000);
}

// ══ GARA TEMA ══════════════════════════════════════════════════
function initTheme() {
  const saved = localStorage.getItem('brt_theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    const btn = $('theme-toggle-btn');
    if (btn) btn.checked = true;
    updateThemeLabel(true);
  }
}
function updateThemeLabel(isDark) {
  const lbl = $('theme-label');
  if (lbl) lbl.textContent = isDark ? '☀️ Ýagty tema' : '🌙 Garaňky tema';
}
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('brt_theme', isDark ? 'dark' : 'light');
  updateThemeLabel(isDark);
}

// ══ NAVIGATION ═════════════════════════════════════════════════
function showScreen(id, pushState=true) {
  if (id === 'screen-search') {
    gSearchHL = '';
    // Gözleg ekranyna girilende öňki netijeler arassalanýar
    var si = $('search-input');
    var sr = $('search-results');
    if (si) si.value = '';
    if (sr) sr.innerHTML = '<p class="empty-hint">🔍 Gözleg üçin söz ýazyň.</p>';
  }
  const prev = document.querySelector('.screen.active');
  if (!prev || prev.id === id) return;
  prev.classList.remove('active'); prev.classList.add('slide-out');
  setTimeout(() => prev.classList.remove('slide-out'), 350);
  const next = $(id);
  if (!next) return;
  next.classList.add('active');
  currentScreen = id;
  // Bölüme täze girilende filtrleri "Hemmesi"-e gaýtar
  if (id === 'screen-teleradio') {
    var allBtn = next.querySelector('.tr-filter-btn[data-district="all"]');
    if (allBtn) allBtn.click();
  }
  if (id === 'screen-isgaryn') {
    var allIgBtn = next.querySelector('.ig-filter-btn[data-cat="all"]');
    if (allIgBtn) allIgBtn.click();
  }
  if (pushState) history.pushState({screen:id}, '', '#'+id);
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.target===id));
  closeSidebar();
  // Kitap däl bölümlerde scroll pozisiýasyny nola getir
  var kitapScreens = ['screen-kitap-reader','screen-gz-reader'];
  if (!kitapScreens.includes(id)) {
    var mc = next.querySelector('.main-content');
    if (mc) mc.scrollTop = 0;
  }
}


// ══ KITAPHANA ══════════════════════════════════════════════════
var kitapCurrentBook  = null;
var kitapCurrentPage  = 0;
var kitapFontSize     = 16;
var kitapSearchActive = false;
var kitapSearchQuery  = '';
var kitapSearchMatches = [];   // [{pageIdx, count}]

/* —— kitap kartoçkalary —— */

// ══ GÖZÜKDIRMELER OKYJY ══════════════════════════════════════════

var gzState = {
  idx:    0,       // häzirki görkezilýän gözükdirme indeksi
  fontSize: 16,
};

function renderGzToc() {
  var list = $('gz-toc-list');
  if (!list) return;
  list.innerHTML = '';
  GZ_DATA.forEach(function(gz, i) {
    var item = document.createElement('div');
    item.className = 'gz-toc-item';
    item.innerHTML =
      '<div class="gz-toc-badge">' + gz.no + '</div>' +
      '<div class="gz-toc-text">' + esc(gz.title) + '</div>' +
      (gz.gozNo ? '<div class="gz-toc-num">№' + esc(gz.gozNo) + '</div>' : '');
    item.addEventListener('click', function() { openGzReader(i); });
    list.appendChild(item);
  });
}

function openGzReader(idx) {
  gzState.idx = idx;
  renderGzPage();
  showScreen('screen-gz-reader');
}

function renderGzPage() {
  var gz    = GZ_DATA[gzState.idx];
  var wrap  = $('gz-reader-wrap');
  var cont  = $('gz-reader-content');
  var title = $('gz-reader-title');
  var cur   = $('gz-cur-num');
  var tot   = $('gz-total-num');
  var prevB = $('gz-prev');
  var nextB = $('gz-next');
  if (!gz || !cont) return;

  // Başlyk
  if (title) title.textContent = 'Gözükdirme №' + (gz.gozNo || gz.no);
  if (cur)   cur.textContent   = gz.no;
  if (tot)   tot.textContent   = GZ_DATA.length;
  if (prevB) prevB.disabled    = gzState.idx <= 0;
  if (nextB) nextB.disabled    = gzState.idx >= GZ_DATA.length - 1;

  // Mazmuny
  cont.style.fontSize = gzState.fontSize + 'px';

  if (gz.text && gz.text.trim()) {
    // Doly tekst bar — pageToHtml bilen görkez
    cont.innerHTML =
      '<div class="gz-entry-title">Gözükdirme №' + esc(gz.gozNo || String(gz.no)) + '<br><span class="gz-entry-subtitle">' + esc(gz.title) + '</span></div>' +
      pageToHtml(gz.text);
  } else {
    // Heniz tekst goşulmadyk
    cont.innerHTML =
      '<div class="gz-entry-title">Gözükdirme №' + esc(gz.gozNo || String(gz.no)) + '<br><span class="gz-entry-subtitle">' + esc(gz.title) + '</span></div>' +
      '<div class="gz-no-text">' +
        '<div class="gz-no-text-icon">📄</div>' +
        '<p>Bu gözükdirmäniň doly teksti ýakynda goşular.</p>' +
        (gz.gozNo ? '<p class="gz-no-text-num">Gözükdirme № ' + esc(gz.gozNo) + '</p>' : '') +
      '</div>';
  }

  // Ýokary gaýt
  if (wrap) setTimeout(function(){ wrap.scrollTop = 0; }, 0);
}

function initGzReader() {
  // Yzyna — mazmuna
  var backBtn = $('gz-back-btn');
  if (backBtn) backBtn.addEventListener('click', function(){
    showScreen('screen-gozukdirmeler');
  });

  // Sanawa düwmesi
  var tocBtn = $('gz-to-toc');
  if (tocBtn) tocBtn.addEventListener('click', function(){
    showScreen('screen-gozukdirmeler');
  });

  // Öňki
  var prevB = $('gz-prev');
  if (prevB) prevB.addEventListener('click', function(){
    if (gzState.idx > 0) { gzState.idx--; renderGzPage(); }
  });

  // Soňky
  var nextB = $('gz-next');
  if (nextB) nextB.addEventListener('click', function(){
    if (gzState.idx < GZ_DATA.length - 1) { gzState.idx++; renderGzPage(); }
  });

  // Zoom
  var zIn  = $('gz-zoom-in');
  var zOut = $('gz-zoom-out');
  var zRst = $('gz-zoom-reset');
  if (zIn)  zIn.addEventListener('click',  function(){ gzState.fontSize = Math.min(24, gzState.fontSize+1); renderGzPage(); });
  if (zOut) zOut.addEventListener('click', function(){ gzState.fontSize = Math.max(12, gzState.fontSize-1); renderGzPage(); });
  if (zRst) zRst.addEventListener('click', function(){ gzState.fontSize = 16; renderGzPage(); });

  // Süpürme — sahypa geçmek
  var wrap = $('gz-reader-wrap');
  if (wrap) {
    var swX = 0, swY = 0;
    wrap.addEventListener('touchstart', function(e){ swX = e.touches[0].clientX; swY = e.touches[0].clientY; }, {passive:true});
    wrap.addEventListener('touchend', function(e){
      var dx = e.changedTouches[0].clientX - swX;
      var dy = e.changedTouches[0].clientY - swY;
      if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy)*1.5) {
        if (dx < 0 && gzState.idx < GZ_DATA.length-1) { gzState.idx++; renderGzPage(); }
        if (dx > 0 && gzState.idx > 0)                 { gzState.idx--; renderGzPage(); }
      }
    }, {passive:true});
  }
}

function renderKitaphana() {
  var grid = $('kitaphana-grid');
  if (!grid) return;
  grid.innerHTML = '';
  KITAP_BOOKS.forEach(function(book) {
    var lastPage = 0;
    try { lastPage = parseInt(localStorage.getItem('kitap_last_'+book.id)||'0')||0; } catch(e){}
    var progress = book.pages.length > 0 ? Math.round((lastPage/book.pages.length)*100) : 0;

    var card = document.createElement('div');
    card.className = 'kgrid-card';
    card.innerHTML =
      '<div class="kgrid-cover" style="background:linear-gradient(145deg,'+book.color+' 0%,'+book.spine+' 100%)">'+
        '<div class="kgrid-cover-lines"></div>'+
        '<div class="kgrid-cover-icon">'+book.icon+'</div>'+
        '<div class="kgrid-cover-title">'+esc(book.title)+'</div>'+
        '<div class="kgrid-cover-sub">'+esc(book.subtitle)+'</div>'+
        (progress>0
          ? '<div class="kgrid-progress"><div class="kgrid-progress-bar" style="width:'+progress+'%"></div><span class="kgrid-progress-txt">'+progress+'%</span></div>'
          : '')+
      '</div>'+
      '<div class="kgrid-info">'+
        '<p class="kgrid-title">'+esc(book.title)+'</p>'+
        '<p class="kgrid-pages">📄 '+book.pages.length+' sahypa</p>'+
      '</div>';
    card.addEventListener('click', function(){ openKitapReader(book); });
    grid.appendChild(card);
  });
}

/* —— kitap açmak —— */
function openKitapReader(book) {
  kitapCurrentBook    = book;
  kitapSearchActive   = false;
  kitapSearchQuery    = '';
  kitapSearchMatches  = [];
  // Öňki okalgy ýeri dikelt
  try { kitapCurrentPage = parseInt(localStorage.getItem('kitap_last_'+book.id)||'0')||0; } catch(e){ kitapCurrentPage=0; }
  if (kitapCurrentPage >= book.pages.length) kitapCurrentPage = 0;

  var titleEl = $('kitap-title');
  if (titleEl) titleEl.textContent = book.icon + ' ' + book.title;
  var slider = $('kitap-slider');
  if (slider) { slider.min=1; slider.max=book.pages.length; slider.value=kitapCurrentPage+1; }
  $('kitap-total-pages').textContent = book.pages.length;

  // Gözleg setirini arassala
  var si=$('kitap-search-input'); if(si) si.value='';
  var sb=$('kitap-search-bar');   if(sb) sb.classList.remove('active');
  var sr=$('kitap-search-results'); if(sr) sr.classList.add('hidden');
  var ind=$('kitap-search-indicator'); if(ind) ind.textContent='';

  kitapEnableZoom(true);
  renderKitapPage();
  showScreen('screen-kitap-reader');
}

/* —— sahypa renderlemek —— */
function escRe(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

function parsePageLines(rawText) {
  // PDF setirlerini akylly paragraflar hökmünde birleşdir
  var lines = rawText.split('\n');
  var blocks = [];
  var cur    = null;

  function flush() { if (cur) { blocks.push(cur); cur = null; } }
  function newBlock(type, text) { flush(); cur = { type: type, text: text }; }

  lines.forEach(function(line) {
    line = line.trim();
    // Sahypa belgilerini (ýeke-täk san) geç
    if (/^\d{1,3}$/.test(line)) return;
    // Boş setir = paragraf soňy
    if (!line) { flush(); return; }

    // Bap başlygy  →  "I BAP.", "II BAP." ...
    if (/^[IVX]+\s+BAP\b/i.test(line)) {
      newBlock('chapter', line); return;
    }
    // Madda başlygy  →  "1-nji madda.", "Madda 5"
    if (/^\d+-nji\s+madda\b/i.test(line) || /^Madda\s+\d+/i.test(line)) {
      newBlock('article', line); return;
    }
    // San bilen belgili punkt  →  "1) ", "2) ", "10) "
    if (/^\d+\)\s/.test(line)) {
      newBlock('listnum', line); return;
    }
    // Tire bilen belgili punkt  →  "– ", "— "
    if (/^[–—]\s/.test(line) || /^-\s[a-züäöňşç]/i.test(line)) {
      newBlock('listdash', line); return;
    }
    // Madda içi san  →  "1. ", "2. " (uly harp bilen başlaýar)
    if (/^\d+\.\s+[A-ZÜÄÖŇŞÇ]/.test(line)) {
      newBlock('numbered', line); return;
    }
    // Dowamy — öňki bloga goş
    if (cur) {
      // Eger öňki söz tire bilen gutarýan bolsa goşma, ýogsam boşluk bilen
      if (cur.text.endsWith('-')) cur.text = cur.text.slice(0,-1) + line;
      else cur.text += ' ' + line;
    } else {
      newBlock('normal', line);
    }
  });
  flush();
  return blocks;
}

function pageToHtml(pageText, hlQ) {
  var blocks = parsePageLines(pageText);
  var re = (hlQ && hlQ.length >= 2)
    ? new RegExp('(' + escRe(hlQ) + ')', 'gi') : null;

  function applyHl(txt) {
    var e = esc(txt);
    return re ? e.replace(re, '<mark class="kitap-hl">$1</mark>') : e;
  }

  var out = '';
  blocks.forEach(function(b) {
    var t = applyHl(b.text);
    // "1. Tekst..." — sanyny galyň et
    function boldNum(str, re) {
      return str.replace(re, function(m, num, rest){ return '<strong>'+num+'</strong>'+rest; });
    }
    if      (b.type === 'chapter')  out += '<p class="kitap-para-chapter">'  + t + '</p>';
    else if (b.type === 'article')  out += '<p class="kitap-para-article">'  + t + '</p>';
    else if (b.type === 'listnum')  out += '<p class="kitap-para-listnum">'  + boldNum(t,/^(\d+\)\s*)(.*)$/s) + '</p>';
    else if (b.type === 'listdash') out += '<p class="kitap-para-listdash">' + t + '</p>';
    else if (b.type === 'numbered') out += '<p class="kitap-para-numbered">' + boldNum(t,/^(\d+\.\s*)(.*)$/s) + '</p>';
    else                            out += '<p class="kitap-para">'          + t + '</p>';
  });
  return out || '<p class="kitap-para">' + esc(pageText) + '</p>';
}

function renderKitapPage() {
  if (!kitapCurrentBook) return;
  var pages   = kitapCurrentBook.pages;
  var content = $('kitap-page-content');
  if (!content) return;
  var hlQ = kitapSearchActive ? kitapSearchQuery : '';
  content.innerHTML  = pageToHtml(pages[kitapCurrentPage]||'', hlQ);
  content.style.fontSize = kitapFontSize + 'px';

  $('kitap-cur-page').textContent = kitapCurrentPage + 1;
  var slider = $('kitap-slider');
  if (slider) slider.value = kitapCurrentPage + 1;
  if ($('kitap-prev')) $('kitap-prev').disabled = (kitapCurrentPage === 0);
  if ($('kitap-next')) $('kitap-next').disabled = (kitapCurrentPage === pages.length - 1);

  // Scroll ýokara (DOM täzelenensoň)
  setTimeout(function(){
    var w=$('kitap-wrap'); if(w){ w.scrollTop=0; }
  }, 0);

  // Ilerleýiş sakla
  try { localStorage.setItem('kitap_last_'+kitapCurrentBook.id, kitapCurrentPage); } catch(e){}

  // Gözleg görkeziji täzele
  var ind = $('kitap-search-indicator');
  if (ind) {
    if (kitapSearchActive && kitapSearchMatches.length) {
      var cur = null;
      for (var i=0;i<kitapSearchMatches.length;i++){
        if (kitapSearchMatches[i].pageIdx===kitapCurrentPage){ cur=kitapSearchMatches[i]; break; }
      }
      ind.textContent = cur ? ('✓ '+cur.count+' sany') : '';
    } else {
      ind.textContent = '';
    }
  }
}

function kitapEnableZoom(enable) {
  var meta = document.querySelector('meta[name="viewport"]');
  if (!meta) return;
  meta.content = enable
    ? 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
    : 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
}

/* —— kitap içi gözleg —— */
function kitapDoSearch(q) {
  kitapSearchMatches = [];
  if (!q || q.length < 2 || !kitapCurrentBook) {
    kitapSearchActive = false; kitapSearchQuery = '';
    var sr=$('kitap-search-results'); if(sr) sr.classList.add('hidden');
    renderKitapPage(); return;
  }
  kitapSearchActive = true;
  kitapSearchQuery  = q.toLowerCase();
  var re = new RegExp(escRe(q), 'gi');
  kitapCurrentBook.pages.forEach(function(txt, idx){
    var cnt = (txt.match(re)||[]).length;
    if (cnt>0) kitapSearchMatches.push({pageIdx:idx, count:cnt});
  });
  var sr = $('kitap-search-results');
  if (!sr) return;
  if (!kitapSearchMatches.length) {
    sr.innerHTML='<div class="ks-noresult">😔 Tapylmady</div>';
    sr.classList.remove('hidden');
    renderKitapPage(); return;
  }
  var total = kitapSearchMatches.reduce(function(s,m){return s+m.count;},0);
  var html = '<div class="ks-summary">📄 '+kitapSearchMatches.length+' sahypada <strong>'+total+'</strong> sany</div>';
  kitapSearchMatches.slice(0,20).forEach(function(m){
    html += '<div class="ks-item" data-p="'+m.pageIdx+'">'+
              '<span class="ks-pnum">'+(m.pageIdx+1)+'-sah.</span>'+
              '<span class="ks-cnt">'+m.count+' sany</span>'+
            '</div>';
  });
  if (kitapSearchMatches.length>20)
    html += '<div class="ks-more">+'+(kitapSearchMatches.length-20)+' sahypa has…</div>';
  sr.innerHTML = html;
  sr.classList.remove('hidden');
  sr.querySelectorAll('.ks-item').forEach(function(el){
    el.addEventListener('click', function(){
      kitapCurrentPage = parseInt(el.dataset.p);
      renderKitapPage();
      sr.classList.add('hidden');
    });
  });
  renderKitapPage();
}

/* —— reader başlatmak —— */
function initKitapReader() {
  if ($('kitap-back-btn')) $('kitap-back-btn').addEventListener('click', function(){
    kitapEnableZoom(false); showScreen('screen-gollanmalar');
  });
  if ($('kitap-prev')) $('kitap-prev').addEventListener('click', function(){
    if (kitapCurrentBook && kitapCurrentPage>0){ kitapCurrentPage--; renderKitapPage(); }
  });
  if ($('kitap-next')) $('kitap-next').addEventListener('click', function(){
    if (kitapCurrentBook && kitapCurrentPage<kitapCurrentBook.pages.length-1){ kitapCurrentPage++; renderKitapPage(); }
  });
  if ($('kitap-zoom-in'))    $('kitap-zoom-in').addEventListener('click', function(){
    if (kitapFontSize<28){ kitapFontSize+=2; var c=$('kitap-page-content'); if(c) c.style.fontSize=kitapFontSize+'px'; }
  });
  if ($('kitap-zoom-out'))   $('kitap-zoom-out').addEventListener('click', function(){
    if (kitapFontSize>10){ kitapFontSize-=2; var c=$('kitap-page-content'); if(c) c.style.fontSize=kitapFontSize+'px'; }
  });
  if ($('kitap-zoom-reset')) $('kitap-zoom-reset').addEventListener('click', function(){
    kitapFontSize=16; var c=$('kitap-page-content'); if(c) c.style.fontSize='16px';
  });
  // Gözleg açma/ýapma
  if ($('kitap-search-toggle')) $('kitap-search-toggle').addEventListener('click', function(){
    var sb=$('kitap-search-bar');
    if (!sb) return;
    var opening = sb.classList.toggle('active');
    if (opening){ var si=$('kitap-search-input'); if(si){si.focus();si.select();} }
    else{ $('kitap-search-results').classList.add('hidden'); }
  });
  var si = $('kitap-search-input');
  if (si) {
    si.addEventListener('input', function(){
      var v=this.value.trim();
      if(v.length>=2) kitapDoSearch(v);
      else if(!v){ kitapSearchActive=false; kitapSearchQuery='';
                   $('kitap-search-results').classList.add('hidden'); renderKitapPage(); }
    });
    si.addEventListener('keydown', function(e){
      if(e.key==='Escape'){ $('kitap-search-bar').classList.remove('active');
                            $('kitap-search-results').classList.add('hidden'); }
    });
  }
  // Slider
  var slider=$('kitap-slider');
  if (slider) {
    slider.addEventListener('input',  function(){ $('kitap-cur-page').textContent=this.value; });
    slider.addEventListener('change', function(){
      if(kitapCurrentBook){ kitapCurrentPage=parseInt(this.value)-1; renderKitapPage(); }
    });
  }
  // Swipe
  var wrap=$('kitap-wrap');
  if (wrap) {
    var sx=0,sy=0;
    wrap.addEventListener('touchstart',function(e){sx=e.touches[0].pageX;sy=e.touches[0].pageY;},{passive:true});
    wrap.addEventListener('touchend',  function(e){
      var dx=e.changedTouches[0].pageX-sx, dy=e.changedTouches[0].pageY-sy;
      if(Math.abs(dx)>70 && Math.abs(dx)>Math.abs(dy)*1.8){
        if(dx<0 && kitapCurrentBook && kitapCurrentPage<kitapCurrentBook.pages.length-1){kitapCurrentPage++;renderKitapPage();}
        else if(dx>0 && kitapCurrentPage>0){kitapCurrentPage--;renderKitapPage();}
      }
    },{passive:true});
  }
}

// ══ PDF VIEWER ═════════════════════════════════════════════════

// ══ IŞGÄRIŇ GOLLANMASY ═════════════════════════════════════════
function renderIsgaryn() {
  const list = $('isgaryn-list');
  if (!list) return;
  const cats = {
    elektronika:   { label:'⚡ Elektronika',       color:'#e65100' },
    yarimgeciriji: { label:'🔬 Ýarymgeçirijiler',  color:'#4a148c' },
    radio:         { label:'📻 Radioaragatnaşyk',   color:'#1565c0' },
    tv:            { label:'📺 Telewideniýe',        color:'#006064' },
    howpsuzlyk:    { label:'⚠️ Howpsuzlyk',         color:'#b71c1c' },
  };
  function build(items) {
    list.innerHTML = '';
    if (!items.length) { list.innerHTML='<p class="empty-hint">Netije tapylmady.</p>'; return; }
    let lastCat = '';
    items.forEach((item, i) => {
      if (item.cat !== lastCat) {
        const lbl = document.createElement('div');
        lbl.className = 'ig-cat-label';
        lbl.style.borderLeftColor = (cats[item.cat] && cats[item.cat].color) || '#1565c0';
        lbl.textContent = (cats[item.cat] && cats[item.cat].label) || item.cat;
        list.appendChild(lbl);
        lastCat = item.cat;
      }
      const card = document.createElement('div');
      card.className = 'ig-card';
      card.innerHTML =
        '<div class="ig-question">' +
          '<span class="ig-num">'+(i+1)+'</span>' +
          '<span class="ig-q-text">'+esc(item.q)+'</span>' +
          '<span class="ig-arrow">&#9660;</span>' +
        '</div>' +
        '<div class="ig-answer hidden">'+esc(item.a)+'</div>';
      card.querySelector('.ig-question').addEventListener('click', function() {
        var ans = card.querySelector('.ig-answer');
        var arr = card.querySelector('.ig-arrow');
        var open = !ans.classList.contains('hidden');
        ans.classList.toggle('hidden', open);
        arr.style.transform = open ? '' : 'rotate(180deg)';
        card.classList.toggle('ig-open', !open);
      });
      list.appendChild(card);
    });
  }
  build(ISGARYN_QA);
  document.querySelectorAll('.ig-filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.ig-filter-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.dataset.cat;
      var filtered = cat === 'all' ? ISGARYN_QA : ISGARYN_QA.filter(function(x){ return x.cat === cat; });
      build(filtered);
    });
  });
}

// ══ GÖZLEG ═════════════════════════════════════════════════════

function escRgx(s){ return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }

// ══ GÖZLEG BELGILEME ════════════════════════════════════════════
var gSearchHL = '';  // Aktiw gözleg sözi (belgilemek üçin)

function applySearchHL(containerEl, query) {
  if (!query || query.length < 2 || !containerEl) return;
  var re = new RegExp('(' + escRgx(query) + ')', 'gi');
  // TreeWalker bilen ähli tekst düwünleri gez
  var walker = document.createTreeWalker(containerEl, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      var pn = node.parentNode;
      // script/style içinde belgileme
      if (pn && (pn.tagName === 'SCRIPT' || pn.tagName === 'STYLE' || pn.tagName === 'MARK')) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.toLowerCase().indexOf(query.toLowerCase()) >= 0
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  }, false);
  var nodes = [];
  var nd;
  while ((nd = walker.nextNode())) nodes.push(nd);
  nodes.forEach(function(textNode) {
    var span = document.createElement('span');
    span.innerHTML = textNode.nodeValue.replace(re, '<mark class="srch-hl srch-hl-nav">$1</mark>');
    textNode.parentNode.replaceChild(span, textNode);
  });
  // Birinji gabat gelen ýere gönükdir
  var first = containerEl.querySelector('mark.srch-hl-nav');
  if (first) setTimeout(function(){ first.scrollIntoView({ behavior:'smooth', block:'center' }); }, 80);
}

function hlText(txt, q) {
  if (!q||q.length<2) return esc(txt);
  return esc(txt).replace(new RegExp('('+escRgx(esc(q))+')','gi'),
    '<mark class="srch-hl">$1</mark>');
}
function snippet(txt, q, len) {
  len=len||110;
  var lo=txt.toLowerCase(), qi=q.toLowerCase();
  var i=lo.indexOf(qi);
  if(i<0) return esc(txt.slice(0,len))+'…';
  var s=Math.max(0,i-40), e=Math.min(txt.length,i+q.length+70);
  return (s>0?'…':'')+hlText(txt.slice(s,e),q)+(e<txt.length?'…':'');
}

function doSearch(query) {
  var q   = query.trim();
  var res = $('search-results');
  if (!q){ res.innerHTML='<p class="empty-hint">🔍 Gözleg üçin söz ýazyň.</p>'; return; }
  res.innerHTML='<p class="empty-hint">Gözlenýär…</p>';

  setTimeout(function(){
    var ql=q.toLowerCase(), results=[];

    // 1) Bölümler
    SEARCH_CONTENT.forEach(function(item){
      var t=item.title.toLowerCase().includes(ql);
      var x=item.text.toLowerCase().includes(ql);
      if(t||x) results.push({type:'section',icon:'📂',title:item.title,screen:item.screen,
        snip: x?snippet(item.text,q):esc(item.title), count:1});
    });

    // 1b) Işgäriň gollanmasy — doly tekst
    if (typeof ISGARYN_QA !== 'undefined') {
      var isgaryn_matches = [];
      ISGARYN_QA.forEach(function(item) {
        var inQ = item.q.toLowerCase().includes(ql);
        var inA = item.a.toLowerCase().includes(ql);
        if (inQ || inA) {
          isgaryn_matches.push({
            q: item.q, a: item.a,
            snipQ: inQ ? snippet(item.q, q) : esc(item.q),
            snipA: inA ? snippet(item.a, q) : ''
          });
        }
      });
      if (isgaryn_matches.length) {
        results.push({
          type: 'isgaryn',
          icon: '🧰',
          title: 'Işgäriň gollanmasy',
          screen: 'screen-isgaryn',
          items: isgaryn_matches,
          count: isgaryn_matches.length
        });
      }
    }

    // 1c) Gözükdirmeler sanawy
    if (typeof GZ_DATA !== 'undefined') {
      var gz_matches = GZ_DATA.filter(function(g){
        return g.title.toLowerCase().includes(ql) ||
               (g.text && g.text.toLowerCase().includes(ql)) ||
               String(g.no).includes(ql) || g.gozNo.includes(ql);
      });
      if (gz_matches.length) {
        results.push({
          type: 'gz',
          icon: '📋',
          title: 'Gözükdirmeler',
          items: gz_matches,
          count: gz_matches.length
        });
      }
    }

    // 2) Kitaplar

    // 2) Kitaplar
    if(typeof KITAP_BOOKS!=='undefined'){
      KITAP_BOOKS.forEach(function(book){
        var re=new RegExp(escRgx(q),'gi');
        var pages=[];
        book.pages.forEach(function(txt,idx){
          var cnt=(txt.match(re)||[]).length;
          if(cnt>0) pages.push({idx:idx,cnt:cnt,snip:snippet(txt,q)});
        });
        if(pages.length){
          var tot=pages.reduce(function(s,p){return s+p.cnt;},0);
          results.push({type:'book',icon:book.icon,title:book.title,book:book,pages:pages,count:tot});
        }
      });
    }

    res.innerHTML='';
    if(!results.length){
      res.innerHTML='<p class="empty-hint">😔 Netije tapylmady.</p>'; return;
    }

    var tot=results.reduce(function(s,r){return s+r.count;},0);
    var sum=document.createElement('div'); sum.className='srch-summary';
    sum.innerHTML='🔍 <strong>'+tot+'</strong> netije tapyldy';
    res.appendChild(sum);

    results.forEach(function(r){
      if(r.type==='section'){
        var c=document.createElement('div'); c.className='srch-card';
        c.innerHTML=
          '<div class="srch-card-top">'+
            '<span class="srch-icon">'+r.icon+'</span>'+
            '<span class="srch-source">'+esc(r.title)+'</span>'+
            '<span class="srch-badge">'+r.count+' sany</span>'+
          '</div>'+
          '<div class="srch-snippet">'+r.snip+'</div>';
        c.addEventListener('click',function(){
          gSearchHL = ql;
          showScreen(r.screen);
          setTimeout(function(){
            var sc = document.getElementById(r.screen);
            if (sc) applySearchHL(sc, gSearchHL);
          }, 120);
        });
        res.appendChild(c);
      } else if (r.type==='gz') {
        var grp=document.createElement('div'); grp.className='srch-book-group';
        var hdr=document.createElement('div'); hdr.className='srch-book-header';
        hdr.innerHTML=
          '<span class="srch-icon">📋</span>'+
          '<span class="srch-source">Gözükdirmeler</span>'+
          '<span class="srch-badge">'+r.count+' sany</span>'+
          '<span class="srch-chevron">▼</span>';
        var pl=document.createElement('div'); pl.className='srch-page-list';
        r.items.slice(0,15).forEach(function(gz){
          var it=document.createElement('div'); it.className='srch-page-item';
          it.innerHTML=
            '<span class="srch-pnum">'+gz.no+'.</span> '+
            '<span class="srch-psnip">'+snippet(gz.title, q)+'</span>';
          it.addEventListener('click',function(e){
            e.stopPropagation();
            gSearchHL = ql;
            var idx=GZ_DATA.findIndex(function(g){return g.no===gz.no;});
            openGzReader(idx>=0?idx:0);
            setTimeout(function(){
              var wrap = document.getElementById('gz-reader-wrap');
              if (wrap) applySearchHL(wrap, gSearchHL);
            }, 150);
          });
          pl.appendChild(it);
        });
        hdr.addEventListener('click',function(){
          pl.classList.toggle('open');
          hdr.querySelector('.srch-chevron').textContent=pl.classList.contains('open')?'▲':'▼';
        });
        grp.appendChild(hdr); grp.appendChild(pl);
        res.appendChild(grp);
      } else if (r.type==='isgaryn') {
        var grp=document.createElement('div'); grp.className='srch-book-group';
        var hdr=document.createElement('div'); hdr.className='srch-book-header';
        hdr.innerHTML=
          '<span class="srch-icon">'+r.icon+'</span>'+
          '<span class="srch-source">'+esc(r.title)+'</span>'+
          '<span class="srch-badge">'+r.count+' sany</span>'+
          '<span class="srch-chevron">▼</span>';
        var pl=document.createElement('div'); pl.className='srch-page-list';
        r.items.slice(0,15).forEach(function(item){
          var it=document.createElement('div'); it.className='srch-page-item';
          it.innerHTML=
            '<div><span class="srch-pnum">S:</span> <span class="srch-psnip">'+item.snipQ+'</span></div>'+
            (item.snipA ? '<div style="margin-top:3px"><span class="srch-pnum">J:</span> <span class="srch-psnip">'+item.snipA+'</span></div>' : '');
          it.addEventListener('click',function(e){
            e.stopPropagation();
            gSearchHL = ql;
            showScreen(r.screen);
            setTimeout(function(){
              var sc = document.getElementById(r.screen);
              if (sc) applySearchHL(sc, gSearchHL);
            }, 150);
          });
          pl.appendChild(it);
        });
        hdr.addEventListener('click',function(){
          pl.classList.toggle('open');
          hdr.querySelector('.srch-chevron').textContent=pl.classList.contains('open')?'▲':'▼';
        });
        grp.appendChild(hdr); grp.appendChild(pl);
        res.appendChild(grp);
      } else {
        var grp=document.createElement('div'); grp.className='srch-book-group';
        var hdr=document.createElement('div'); hdr.className='srch-book-header';
        hdr.innerHTML=
          '<span class="srch-icon">'+r.icon+'</span>'+
          '<span class="srch-source">'+esc(r.title)+'</span>'+
          '<span class="srch-badge">'+r.pages.length+' sah · '+r.count+' sany</span>'+
          '<span class="srch-chevron">▼</span>';
        var pl=document.createElement('div'); pl.className='srch-page-list';
        r.pages.slice(0,20).forEach(function(p){
          var it=document.createElement('div'); it.className='srch-page-item';
          it.innerHTML=
            '<span class="srch-pnum">'+(p.idx+1)+'-sah.</span>'+
            '<span class="srch-pcnt">'+p.cnt+' sany</span>'+
            '<span class="srch-psnip">'+p.snip+'</span>';
          it.addEventListener('click',function(e){
            e.stopPropagation();
            gSearchHL = ql;
            openKitapReader(r.book);
            kitapCurrentPage=p.idx;
            kitapSearchActive=true; kitapSearchQuery=ql;
            renderKitapPage();
            setTimeout(function(){
              var wrap = document.getElementById('kitap-wrap');
              if (wrap) applySearchHL(wrap, gSearchHL);
            }, 150);
          });
          pl.appendChild(it);
        });
        if(r.pages.length>20){
          var mo=document.createElement('div'); mo.className='srch-more';
          mo.textContent='+'+(r.pages.length-20)+' sahypa has…'; pl.appendChild(mo);
        }
        hdr.addEventListener('click',function(){
          pl.classList.toggle('open');
          hdr.querySelector('.srch-chevron').textContent=pl.classList.contains('open')?'▲':'▼';
        });
        grp.appendChild(hdr); grp.appendChild(pl);
        res.appendChild(grp);
      }
    });
  },30);
}

// ══ SIDEBAR ════════════════════════════════════════════════════
function openSidebar()  { $('sidebar').classList.add('open'); $('sidebar-overlay').classList.add('open'); }
function closeSidebar() { $('sidebar').classList.remove('open'); $('sidebar-overlay').classList.remove('open'); }

// ══ STORAGE ════════════════════════════════════════════════════
function getUser()   { return JSON.parse(localStorage.getItem('brt_user') || 'null'); }
function saveUser(d) { localStorage.setItem('brt_user', JSON.stringify(d)); }

// ══ CLOCK ══════════════════════════════════════════════════════
const MONTHS = ['Ýanwar','Fewral','Mart','Aprel','Maý','Iýun','Iýul','Awgust','Sentýabr','Oktýabr','Noýabr','Dekabr'];
function updateClock() {
  const now=new Date(), d=$('clock-date'), t=$('clock-time');
  if (d) d.textContent=now.getDate()+' '+MONTHS[now.getMonth()]+' '+now.getFullYear();
  if (t) t.textContent=String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+':'+String(now.getSeconds()).padStart(2,'0');
}

// ══ STARFIELD ══════════════════════════════════════════════════
function initStars() {
  const canvas = $('starCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars=[], shoots=[];
  function resize() { W=canvas.width=window.innerWidth; H=canvas.height=window.innerHeight; }
  function makeStars(n) { stars=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.4+0.3,spd:Math.random()*0.12+0.04,op:Math.random(),blink:Math.random()*0.018+0.004,dir:Math.random()>0.5?1:-1})); }
  function draw() {
    if (!$('screen-login') || !$('screen-login').classList.contains('active')) { setTimeout(draw,500); return; }
    ctx.clearRect(0,0,W,H);
    const g=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)*0.72);
    g.addColorStop(0,'#0d1230'); g.addColorStop(1,'#050810');
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    stars.forEach(s => {
      s.op+=s.blink*s.dir; if(s.op>1||s.op<0) s.dir*=-1; s.y+=s.spd; if(s.y>H) s.y=0;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle='rgba(200,225,255,'+Math.max(0,Math.min(1,s.op))+')'; ctx.fill();
    });
    shoots.forEach((sh,i) => {
      ctx.beginPath(); ctx.moveTo(sh.x,sh.y); ctx.lineTo(sh.x-sh.len,sh.y+sh.len*0.4);
      ctx.strokeStyle='rgba(180,220,255,'+sh.alpha+')'; ctx.lineWidth=1.5; ctx.stroke();
      sh.x+=sh.spd; sh.y+=sh.spd*0.5; sh.alpha-=0.025; if(sh.alpha<=0) shoots.splice(i,1);
    });
    if(Math.random()<0.012) shoots.push({x:Math.random()*W,y:Math.random()*H*0.5,len:Math.random()*90+40,spd:Math.random()*5+4,alpha:1});
    requestAnimationFrame(draw);
  }
  resize(); makeStars(200); draw();
  window.addEventListener('resize',()=>{resize();makeStars(200);});
}

// ══ QUIZ ═══════════════════════════════════════════════════════
function startQuiz() {
  quizQuestions=shuffle([...QUIZ_QUESTIONS]); quizIndex=0; quizScore=0; quizCombo=0;
  $('quiz-start').classList.add('hidden'); $('quiz-results').classList.add('hidden');
  $('quiz-question-panel').classList.remove('hidden'); $('quiz-score-display').textContent=0;
  showQuestion();
}
function showQuestion() {
  if (quizIndex>=quizQuestions.length) { endQuiz(); return; }
  const q=quizQuestions[quizIndex];
  $('quiz-q-num').textContent=quizIndex+1; $('quiz-q-total').textContent=quizQuestions.length;
  $('quiz-question-text').textContent=q.question;
  const badge=$('combo-badge');
  if(quizCombo>=5){badge.classList.remove('hidden');$('combo-count').textContent=quizCombo;}
  else badge.classList.add('hidden');
  const optCont=$('quiz-options'); optCont.innerHTML='';
  q.options.forEach((opt,i)=>{
    const btn=document.createElement('button'); btn.className='quiz-option'; btn.textContent=opt;
    btn.addEventListener('click',()=>handleAnswer(i,btn)); optCont.appendChild(btn);
  });
  startTimer();
}
function startTimer() {
  quizTimeLeft=10; updateTimerUI(10); clearInterval(quizTimerID);
  quizTimerID=setInterval(()=>{ quizTimeLeft--; updateTimerUI(quizTimeLeft); if(quizTimeLeft<=0){clearInterval(quizTimerID);handleTimeout();} },1000);
}
function updateTimerUI(t) {
  $('timer-count').textContent=t;
  const ring=$('timer-ring'); ring.style.strokeDashoffset=TIMER_CIRC*(1-t/10); ring.classList.toggle('danger',t<=3);
}
function handleTimeout() { disableOptions(); quizCombo=0; setTimeout(nextQuestion,1000); }
function handleAnswer(idx,btn) {
  clearInterval(quizTimerID); disableOptions();
  if(idx===quizQuestions[quizIndex].correctIndex){
    quizCombo++; quizScore+=quizCombo>5?2:1; $('quiz-score-display').textContent=quizScore;
    btn.classList.add('correct');
  } else { quizCombo=0; btn.classList.add('wrong'); }
  setTimeout(nextQuestion,900);
}
function disableOptions() { document.querySelectorAll('.quiz-option').forEach(b=>b.disabled=true); }
function nextQuestion() { quizIndex++; showQuestion(); }
function endQuiz() {
  $('quiz-question-panel').classList.add('hidden'); $('quiz-results').classList.remove('hidden');
  const pct=quizScore/(quizQuestions.length*2)*100;
  let emoji,title,text;
  if(pct>=75){emoji='🏆';title='Ajaýyp!';text='Hakyky hünärmen! Bilim hazynasy!';}
  else if(pct>=50){emoji='🎉';title='Gowy!';text='Gowy netije, has öwrenmegi dowam et!';}
  else if(pct>=25){emoji='📚';title='Dowam et!';text='Gaýrat et! Başga bir gezek synanyş!';}
  else{emoji='💪';title='Işe girip git!';text='Kän öwrenmeli, emma başlaýan ýok!';}
  $('result-emoji').textContent=emoji; $('result-title').textContent=title;
  $('result-score-big').textContent=quizScore;
  $('result-text').textContent=quizQuestions.length+' soragdan '+quizScore+' bal. '+text;
}

// ══ LOGIN ══════════════════════════════════════════════════════
function initLogin() {
  const user=getUser();
  if (user) { loadMain(user); return; }
  $('btn-login').addEventListener('click',()=>{
    const name=$('inp-name').value.trim(), surname=$('inp-surname').value.trim(), position=$('inp-position').value.trim();
    if(!name||!surname||!position){ shakeEmpty(); return; }
    saveUser({name,surname,position}); loadMain({name,surname,position}, true);
  });
  ['inp-name','inp-surname','inp-position'].forEach(id=>{
    $(id).addEventListener('keydown',e=>{ if(e.key==='Enter') $('btn-login').click(); });
  });
}
function shakeEmpty() {
  ['inp-name','inp-surname','inp-position'].forEach(id=>{
    const el=$(id);
    if(!el.value.trim()){ el.style.borderColor='#ff1744'; el.style.animation='shake 0.4s ease'; setTimeout(()=>{el.style.borderColor='';el.style.animation='';},650); }
  });
}
function loadMain(user, isNew) {
  const sbName=$('sb-name'), sbPos=$('sb-position');
  if(sbName) sbName.textContent=user.name+' '+user.surname;
  if(sbPos)  sbPos.textContent=user.position;
  const login=$('screen-login');
  login.classList.remove('active'); login.classList.add('slide-out');
  setTimeout(()=>login.classList.remove('slide-out'),350);
  $('screen-main').classList.add('active');
  currentScreen='screen-main';
  history.replaceState({screen:'screen-main'},'','#screen-main');
  if (isNew) {
    setTimeout(function(){ showOnboarding(user); }, 400);
  } else {
    checkHoliday();
  }
}


// ══ ONBOARDING ═════════════════════════════════════════════════
var onboardSlides = [
  {
    icon: '🎉',
    title: 'Hoş geldiňiz!',
    body: '', // user name injected at runtime
    type: 'welcome'
  },
  {
    icon: '🎯',
    title: 'Programmanyň maksady',
    body: 'Bu programma Boldumsaz radio we telewideniýe ýaýradyjy bölüminiň işgärlerine gündelik iş amallary, tehniki bilim we howpsuzlyk düzgünleri barada ýeke-täk elýeterli gollanma bolmagy üçin döredildi.'
  },
  {
    icon: '📚',
    title: 'Bölümler',
    body: '• 📖 Kitaphana — hünär kitaplary\n• 🧰 Işgäriň gollanmasy — sorag-jogaplar\n• 📋 Gözükdirmeler — 72 tehniki gözükdirme\n• 🎓 Bilimiňi barla — 50 soragly test\n• 💡 Gyzykly maglumatlar\n'
  },
  {
    icon: '⭐',
    title: 'Aýratynlyklary',
    body: '• Internetsiz işleýär (offline)\n• Garaňky we Ýagty tema\n• Tiz gözleg — ähli bölümlerde\n• Ýönekeý we çalt interfeýs'
  },
  {
    icon: '👨‍💻',
    title: 'Dörediji',
    body: 'Y. H. Bazarow\nBoldumsaz radio we telewideniýe \nýaýradyjy bölümi',
    quote: '"Bilim — iň gowy maýa goýumdyr."'
  }
];

var onboardIdx = 0;

function showOnboarding(user) {
  var overlay = $('onboard-overlay');
  var slidesEl = $('onboard-slides');
  var dotsEl   = $('onboard-dots');
  if (!overlay) return;

  // Inject user name into first slide
  onboardSlides[0].body = user.name + ' ' + user.surname + ',\nBoldumsaz radio we telewideniýe ýaýradyjy bölüminiň maglumat programmasynda\nhoş gördük!';

  onboardIdx = 0;
  renderOnboardSlide();

  // Dots
  dotsEl.innerHTML = '';
  onboardSlides.forEach(function(_, i) {
    var d = document.createElement('span');
    d.className = 'onboard-dot' + (i===0?' active':'');
    d.dataset.i = i;
    d.addEventListener('click', function(){ goOnboard(+d.dataset.i); });
    dotsEl.appendChild(d);
  });

  overlay.classList.remove('hidden');
  setTimeout(function(){ overlay.classList.add('visible'); }, 10);

  // Confetti on first slide
  startOnboardConfetti();

  $('onboard-next').onclick = function() {
    if (onboardIdx < onboardSlides.length - 1) {
      goOnboard(onboardIdx + 1);
    } else {
      closeOnboarding();
    }
  };
}

function goOnboard(i) {
  var slides = $('onboard-slides');
  slides.classList.add('slide-leaving');
  setTimeout(function(){
    onboardIdx = i;
    renderOnboardSlide();
    slides.classList.remove('slide-leaving');
    slides.classList.add('slide-entering');
    setTimeout(function(){ slides.classList.remove('slide-entering'); }, 120);
    // Update dots
    document.querySelectorAll('.onboard-dot').forEach(function(d,j){ d.classList.toggle('active', j===i); });
    // Update button
    $('onboard-next').textContent = i === onboardSlides.length-1 ? '✅ OK!' : 'Dowam et →';
    // Confetti only on first
    if (i === 0) startOnboardConfetti();
  }, 220);
}

function renderOnboardSlide() {
  var s = onboardSlides[onboardIdx];
  var slidesEl = $('onboard-slides');
  var bodyHtml = s.body.split('\n').map(function(l){ return '<span>'+esc(l)+'</span>'; }).join('');
  slidesEl.innerHTML =
    '<div class="onboard-icon">' + s.icon + '</div>' +
    '<h2 class="onboard-title">' + esc(s.title) + '</h2>' +
    '<div class="onboard-body">' + bodyHtml + '</div>' +
    (s.quote ? '<div class="onboard-quote">' + esc(s.quote) + '</div>' : '');
}

function closeOnboarding() {
  var overlay = $('onboard-overlay');
  overlay.classList.remove('visible');
  stopOnboardConfetti();
  setTimeout(function(){ overlay.classList.add('hidden'); checkHoliday(); }, 350);
}

// ── Confetti ──────────────────────────────────────────────────
var confettiAnim = null;
var confettiCanvas = null;
var confettiCtx   = null;
var confettiPieces = [];

function startOnboardConfetti() {
  confettiCanvas = $('onboard-confetti');
  if (!confettiCanvas) return;
  confettiCanvas.classList.add('active');
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiCtx = confettiCanvas.getContext('2d');

  var colors = ['#f44336','#e91e63','#9c27b0','#3f51b5','#03a9f4','#4caf50','#ffeb3b','#ff9800'];
  confettiPieces = Array.from({length: 110}, function() {
    return {
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height - confettiCanvas.height,
      w: Math.random()*8+5, h: Math.random()*14+6,
      color: colors[Math.floor(Math.random()*colors.length)],
      rot: Math.random()*360, rotSpd: (Math.random()-0.5)*6,
      spd: Math.random()*3+2, drift: (Math.random()-0.5)*2,
      alpha: 1
    };
  });

  cancelAnimationFrame(confettiAnim);
  (function loop() {
    confettiCtx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
    var alive = false;
    confettiPieces.forEach(function(p) {
      p.y += p.spd; p.x += p.drift; p.rot += p.rotSpd;
      if (p.y > confettiCanvas.height * 0.75) p.alpha -= 0.012;
      if (p.alpha <= 0) return;
      alive = true;
      confettiCtx.save();
      confettiCtx.globalAlpha = Math.max(0, p.alpha);
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate(p.rot * Math.PI / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      confettiCtx.restore();
    });
    if (alive) confettiAnim = requestAnimationFrame(loop);
  })();
}

function stopOnboardConfetti() {
  cancelAnimationFrame(confettiAnim);
  if (confettiCanvas) {
    confettiCanvas.classList.remove('active');
    if (confettiCtx) confettiCtx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
  }
}

// ══ HABARLAŞMAK ════════════════════════════════════════════════
function initContact() {
  var sendBtn = $('contact-send-btn');
  if (!sendBtn) return;
  sendBtn.addEventListener('click', function() {
    var msg   = ($('contact-msg').value || '').trim();
    var email = ($('contact-email').value || '').trim();
    var status = $('contact-status');

    if (!msg) { showContactStatus('⚠️ Hatyňyzy ýazyň!', 'warn', 2000); return; }
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      showContactStatus('⚠️ Dogry e-mail salgysyny giriziň!', 'warn', 2000); return;
    }
    if (!navigator.onLine) {
      showContactStatus('📵 Internet ýok! Internete birikip, täzeden synanşyň.', 'error', 2000); return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = '⏳ Ugradylýar…';

    var formData = new FormData();
    formData.append('message', msg);
    formData.append('email',   email);
    formData.append('_subject', 'BRT App — Ulanyjy haty');
    formData.append('_captcha', 'false');
    formData.append('_template', 'table');

    fetch('https://formsubmit.co/yhlas.hudayberdievich@gmail.com', {
      method: 'POST',
      body: formData
    })
    .then(function(r) {
      if (r.ok) {
        showContactStatus('✅ Hatyňyz üstünlikli ugradyldy! Sag boluň!', 'ok', 5000);
        $('contact-msg').value   = '';
        $('contact-email').value = '';
      } else {
        showContactStatus('❌ Ugratmak başartmady. Täzeden synanşyň.', 'error', 2000);
      }
    })
    .catch(function() {
      showContactStatus('📵 Bağlantı hatasy. Internete birikip täzeden synanyşyň.', 'error', 2000);
    })
    .finally(function() {
      sendBtn.disabled = false;
      sendBtn.textContent = '📨 Ugrat';
    });
  });
}

function showContactStatus(msg, type, autohide) {
  var el = $('contact-status');
  el.textContent = msg;
  el.className = 'contact-status contact-status-' + type;
  if (autohide) {
    setTimeout(function(){
      el.className = 'contact-status hidden';
      el.textContent = '';
    }, autohide);
  }
}

// ══ MAIN INIT ══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {

  // Pull-to-refresh öçürmek
  var startY = 0;
  document.addEventListener('touchstart', function(e) { startY = e.touches[0].pageY; }, { passive: true });
  document.addEventListener('touchmove', function(e) {
    var dy = e.touches[0].pageY - startY;
    var scrollEl = e.target.closest('.main-content, .sidebar-nav, .facts-main, .kitap-content-wrap, #kitap-wrap, .gz-reader-wrap, #gz-reader-wrap');
    if (!scrollEl) { e.preventDefault(); return; }
    var atTop    = scrollEl.scrollTop <= 0;
    var atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1;
    if (atTop && dy > 0) e.preventDefault();
    if (atBottom && dy < 0) e.preventDefault();
  }, { passive: false });

  initSplash();
  initStars();
  initLogin();
  initTheme();
  updateClock();
  setInterval(updateClock, 1000);

  // Global hamburger
  document.querySelectorAll('.global-hamburger').forEach(function(btn){ btn.addEventListener('click', openSidebar); });
  $('sidebar-overlay').addEventListener('click', closeSidebar);

  // Sidebar nav
  document.querySelectorAll('.nav-item[data-target]').forEach(function(link){
    link.addEventListener('click', function(){ showScreen(link.dataset.target); });
  });

  // Back buttons
  document.querySelectorAll('.back-btn[data-target]').forEach(function(btn){
    btn.addEventListener('click', function(){ showScreen(btn.dataset.target); });
  });

  // Theme toggle
  var themeBtn = $('theme-toggle-btn');
  if (themeBtn) themeBtn.addEventListener('change', toggleTheme);

  // Logout
  $('btn-logout').addEventListener('click', function(){
    closeSidebar();
    var overlay = document.getElementById('logout-overlay');
    if (overlay) {
      overlay.classList.add('active');
      // Ýok
      document.getElementById('logout-no').onclick = function(){
        overlay.classList.remove('active');
      };
      // Hawa
      document.getElementById('logout-yes').onclick = function(){
        overlay.classList.remove('active');
        localStorage.removeItem('brt_user');
        location.reload();
      };
      // Daşyna bassaň ýapylýar
      overlay.addEventListener('click', function(e){
        if (e.target === overlay) overlay.classList.remove('active');
      }, { once: true });
    }
  });

  // Habarlaşmak
  var btnContact = $('btn-contact');
  if (btnContact) btnContact.addEventListener('click', function(){
    closeSidebar(); showScreen('screen-contact');
  });
  initContact();

  // Baş sahypa kartalar
  var btnGepleyar = $('btn-gepleyar');
  if (btnGepleyar) btnGepleyar.addEventListener('click', function(){ showScreen('screen-gepleyar'); });
  var btnTw = $('btn-twhistory');
  if (btnTw) btnTw.addEventListener('click', function(){ showScreen('screen-twhistory'); });
  var btnTeleradio = $('btn-teleradio');
  if (btnTeleradio) btnTeleradio.addEventListener('click', function(){ showScreen('screen-teleradio'); });
  var btnAbout = $('btn-about');
  if (btnAbout) btnAbout.addEventListener('click', function(){ showScreen('screen-about'); });

  // Teleradio filter
  document.querySelectorAll('.tr-filter-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.tr-filter-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var selected = btn.dataset.district;
      document.querySelectorAll('.tr-district').forEach(function(d){
        if (selected === 'all' || d.dataset.district === selected) d.classList.remove('hidden');
        else d.classList.add('hidden');
      });
    });
  });

  // Gutlag modal ýapmak
  var holidayClose = $('holiday-close');
  if (holidayClose) holidayClose.addEventListener('click', function(){ $('holiday-modal').classList.add('hidden'); });


  // Kitaphana
  renderKitaphana();
  renderGzToc();
  initGzReader();
  initKitapReader();

  // Işgäriň gollanmasy
  renderIsgaryn();

  // Search
  $('search-btn').addEventListener('click', function(){ doSearch($('search-input').value); });
  $('search-input').addEventListener('keydown', function(e){ if(e.key==='Enter') doSearch($('search-input').value); });

  // Quiz
  $('quiz-start-btn').addEventListener('click', startQuiz);
  $('quiz-restart-btn').addEventListener('click', startQuiz);
  $('quiz-back-btn').addEventListener('click', function(){
    clearInterval(quizTimerID);
    $('quiz-question-panel').classList.add('hidden');
    $('quiz-results').classList.add('hidden');
    $('quiz-start').classList.remove('hidden');
    showScreen('screen-main');
  });

  // Android back
  // Android "Back" düwmesi — iki gezek bass çykmak
  var backPressCount = 0;
  var backPressTimer = null;

  window.addEventListener('popstate', function(e){
    if (e.state && e.state.screen) {
      var target=$(e.state.screen), cur=document.querySelector('.screen.active');
      if(cur && target && cur.id!==e.state.screen){
        cur.classList.remove('active'); cur.classList.add('slide-out');
        setTimeout(function(){ cur.classList.remove('slide-out'); },350);
        target.classList.add('active'); currentScreen=e.state.screen;
        backPressCount = 0;
        return;
      }
    }
    // Taryh gutaran — çykmak soragy
    backPressCount++;
    history.pushState({screen: currentScreen}, '', '#' + currentScreen);
    if (backPressCount === 1) {
      showBackToast();
      backPressTimer = setTimeout(function(){ backPressCount = 0; }, 2500);
    } else {
      clearTimeout(backPressTimer);
      backPressCount = 0;
      if (window.Android && window.Android.exitApp) {
        window.Android.exitApp();
      }
    }
  });

  function showBackToast() {
    var old = document.getElementById('back-toast');
    if (old) { clearTimeout(old._timer); old.remove(); }
    var t = document.createElement('div');
    t.id = 'back-toast'; t.className = 'back-toast';
    t.innerHTML = '⬅&nbsp;&nbsp;Çykmak üçin ýene bir gezek basyň';
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('show'); });
    t._timer = setTimeout(function(){
      t.classList.remove('show');
      setTimeout(function(){ if(t.parentNode) t.remove(); }, 350);
    }, 2200);
  }
});

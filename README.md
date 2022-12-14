# Proba-it-lsac

#Frontend
Pentru a se accesa pagina de frontend, in my-app se ruleaza npm start.
Am implementat:
1. Navbar
2. Landing page
4. Formular de upload imagini
5. Footer
6. Responsivitatea design-ului

Pentru implementarea acestori task-uri am scris scheletul de html folosind react
adaugand bootstrap si css (din styles.css). Am incadrat elementele paginii in:
Navbar, LandingPage, UploadForm, MostViewed si Footer. Toate acestea au fost
incadrate intr-un continer-fluid pentru a se suprapune frumos.
Navbarul este facut cu bootstrap, pe mobil optiunile din dreapta se minimizeaza
intr-un burger menu.
Landing page, Upload form si Most Viewed au elementele row si col-lg,col-md,col-sm
pentru a arata diferit pe un ecran mare fata de unul mic. In landing page butonul
upload conine un href catre id-ul div-ului in care se afla Upload form.
Upload form-ul are functionalitatea descris, acesta acceptand fise numai de tipul
jpg, jpeg, png si gif, si cu optiunea de click sau drag and drop.
In footer am folosit icons importate de font awesome, aceastea continand linkuri
catre paginile respective.
Ca designul sa fie responsive, pe langa implementarea de row si col, care pune
elemente care erau unul langa altul pe un ecran mare unull sub altul pe un ecran
mic, am folosit media query pentru a schimba unele dimenisuni pentru un ecran de
mobil.


#Backend
Pentru a se accesa API-ul de backend, in directorul parinte se ruleaza node backend.js.
Apeluri catre API se dau prin postman cu format x-www-form-url-encoded, exemplu:
get http://localhost:3000/memes
post http://localhost:3000/memes?description=salut
delete http://localhost:3000/memes/63971fbac5b611412f2f2a3c
post http://localhost:3000/register
post http://localhost:3000/login
Am implementat:
1. DB schema for users
2. CRUD
3. Register & Login (implementat partial)

Pentru a implementa backendul am folosit node.js. Pentru baza de date am folosit mongodb.
Schemele pentru users si memes le-am facut cu mongoose.Schema cu parametrii din cerinta.
Crud-ul l-am facut cu mongoose. Am preluat parametrii din req.body cu care am facut operatiile necesare.
Register a fost implementat la fel ca post meme, parola fiind has-uita inainte de a o introduce in baza
de date. Login-ul nu l-am implemmentat complet, acesta doar verifica daca un username exista, daca da
daca are parola stocata, fara a trimite un tokn de autentificare.

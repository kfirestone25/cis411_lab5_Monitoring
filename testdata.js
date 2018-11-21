const users = [
    { email:'ilikered@outlook.com', name:'Beatrice Brock'},
    { email:'boomzilla@att.net', name:'Luis Tucker'},
    { email:'iapetus@msn.com', name:'Ryan Boyd'},
    { email:'paina@verizon.net', name:'Rex Marsh'},
    { email:'lbaxter@optonline.net', name:'Fred Castro'},
    { email:'engelen@yahoo.com', name:'Felipe Alvarado'},
    { email:'ubergeeb@icloud.com', name:'Russell Casey'},
    { email:'wortmanj@icloud.com', name:'Colleen Hopkins'},
    { email:'jramio@verizon.net', name:'Casey Vaughn'},
    { email:'wilsonpm@msn.com', name:'Bradford Mathis'},
    { email:'treit@gmail.com', name:'Kelli Edwards'},
    { email:'dodong@sbcglobal.net', name:'Elisa Klein'},
    { email:'mgreen@att.net', name:'Dianne Mccarthy'},
    { email:'harpes@outlook.com', name:'Alberto Lee'},
    { email:'erynf@mac.com', name:'Mildred Gray'},
    { email:'carreras@gmail.com', name:'Levi Reeves'},
    { email:'rmcfarla@aol.com', name:'Alicia Ramsey'},
    { email:'rhialto@msn.com', name:'Hope Simmons'},
    { email:'qrczak@outlook.com', name:'Elaine Olson'},
    { email:'daveewart@verizon.net', name:'Krista Bradley'},
    { email:'bryanw@optonline.net', name:'Regina Houston'},
    { email:'portele@outlook.com', name:'Sandra Ortiz'},
    { email:'melnik@outlook.com', name:'Alton Duncan'},
    { email:'skajan@outlook.com', name:'Sammy Porter'},
    { email:'preneel@icloud.com', name:'Eduardo Morrison'},
    { email:'eurohack@optonline.net', name:'Henry Cole'},
    { email:'kludge@me.com', name:'Jennie Jordan'},
    { email:'arebenti@verizon.net', name:'Sherri Bass'},
    { email:'nullchar@yahoo.com', name:'Elena Jackson'},
    { email:'delpino@yahoo.ca', name:'Ricky Townsend'},
    { email:'wilsonpm@att.net', name:'Vivian Moody'},
    { email:'parrt@comcast.net', name:'Walter Underwood'},
    { email:'webteam@icloud.com', name:'Nichole Nelson'},
    { email:'uncled@live.com', name:'Jesse Jensen'},
    { email:'tubesteak@me.com', name:'Spencer Fernandez'},
    { email:'smcnabb@msn.com', name:'Eula Hale'},
    { email:'irving@verizon.net', name:'Raquel Weaver'},
    { email:'kuparine@verizon.net', name:'Cornelius Gilbert'},
    { email:'keijser@att.net', name:'Cynthia Haynes'},
    { email:'pappp@optonline.net', name:'Leroy Singleton'},
    { email:'onestab@comcast.net', name:'Wm Reed'},
    { email:'ardagna@gmail.com', name:'Shannon Powers'},
    { email:'nanop@comcast.net', name:'Jackie Sutton'},
    { email:'mhanoh@mac.com', name:'Kurt Cross'},
    { email:'sherzodr@me.com', name:'Perry Fisher'},
    { email:'stefano@gmail.com', name:'Duane Schmidt'},
    { email:'shang@gmail.com', name:'Shelley Hanson'},
    { email:'wikinerd@me.com', name:'Terence Rowe'},
    { email:'osaru@verizon.net', name:'Andres Lewis'},
    { email:'agolomsh@hotmail.com', name:'Tami Williamson'},
    { email:'ullman@verizon.net', name:'Dora Kim'},
    { email:'karasik@optonline.net', name:'Ora Davidson'},
    { email:'makarow@live.com', name:'Lionel Abbott'},
    { email:'ryanvm@yahoo.ca', name:'Salvador Black'},
    { email:'fhirsch@comcast.net', name:'Marlon Briggs'},
    { email:'mxiao@yahoo.com', name:'Lauren Gibbs'},
    { email:'cremonini@gmail.com', name:'Emanuel Sanders'},
    { email:'uqmcolyv@aol.com', name:'Victoria Garner'},
    { email:'agapow@gmail.com', name:'Fredrick Castillo'},
    { email:'engelen@aol.com', name:'Lee Ward'},
    { email:'rcwil@comcast.net', name:'Gretchen Mcdaniel'},
    { email:'mbswan@gmail.com', name:'Randall Caldwell'},
    { email:'paina@live.com', name:'Kelley Vargas'},
    { email:'mfleming@verizon.net', name:'Jay Schultz'},
    { email:'giafly@msn.com', name:'Rita Morris'},
    { email:'gavinls@att.net', name:'Antoinette Lopez'},
    { email:'bigmauler@verizon.net', name:'Tricia Norris'},
    { email:'rfisher@outlook.com', name:'Cathy Zimmerman'},
    { email:'paley@gmail.com', name:'Kirk Rodriguez'},
    { email:'arachne@optonline.net', name:'Bertha Flowers'},
    { email:'trygstad@yahoo.com', name:'Roland Jenkins'},
    { email:'roamer@comcast.net', name:'Marilyn Fields'},
    { email:'pereinar@me.com', name:'Deanna Mckenzie'},
    { email:'bastian@msn.com', name:'Delbert Gomez'},
    { email:'rasca@comcast.net', name:'Leslie Arnold'},
    { email:'miami@sbcglobal.net', name:'Marguerite Todd'},
    { email:'dkeeler@att.net', name:'Amy Harrison'},
    { email:'dieman@yahoo.com', name:'Abraham Perry'},
    { email:'gtewari@icloud.com', name:'Clay Dixon'},
    { email:'fhirsch@gmail.com', name:'Tasha Collins'},
    { email:'stellaau@msn.com', name:'Josephine Strickland'},
    { email:'samavati@comcast.net', name:'Tracy Newton'},
    { email:'chlim@optonline.net', name:'Maria Watkins'},
    { email:'jgmyers@verizon.net', name:'Carole Roberts'},
    { email:'drhyde@sbcglobal.net', name:'Nora Massey'},
    { email:'flakeg@live.com', name:'Arlene Ross'},
    { email:'engelen@mac.com', name:'Christina Henry'},
    { email:'roamer@sbcglobal.net', name:'Robyn Lawson'},
    { email:'jyoliver@outlook.com', name:'Jody Phelps'},
    { email:'blixem@sbcglobal.net', name:'Susan Gutierrez'},
    { email:'jdhedden@yahoo.ca', name:'Anne Diaz'},
    { email:'kayvonf@att.net', name:'Matthew Howell'},
    { email:'fbriere@icloud.com', name:'Wilbur Coleman'},
    { email:'isorashi@outlook.com', name:'Danielle Ingram'},
    { email:'bockelboy@att.net', name:'Blanche Moran'},
    { email:'sekiya@hotmail.com', name:'Joanna White'},
    { email:'drezet@msn.com', name:'Lynette Hunter'},
    { email:'calin@gmail.com', name:'Mark Burke'},
    { email:'glenz@verizon.net', name:'Stephen Malone'},
    { email:'nelson@me.com', name:'Darren Lucas'},
    { email:'arachne@hotmail.com', name:'Al White'},
    { email:'chaffar@yahoo.com', name:'Saul Romero'},
    { email:'nacho@live.com', name:'Lucille Ruiz'},
    { email:'parkes@icloud.com', name:'Lula Cummings'},
    { email:'ivoibs@optonline.net', name:'Della Murray'},
    { email:'stomv@aol.com', name:'Darrell Cobb'},
    { email:'jshearer@icloud.com', name:'Heidi Armstrong'},
    { email:'benanov@live.com', name:'Connie West'},
    { email:'dimensio@aol.com', name:'Lee Summers'},
    { email:'rhavyn@live.com', name:'Patricia Pratt'},
    { email:'cgarcia@yahoo.com', name:'Terry Mcdaniel'},
    { email:'grinder@icloud.com', name:'Mike Mills'},
    { email:'ilikered@aol.com', name:'Sheryl Porter'},
    { email:'ghost@me.com', name:'Stuart Lambert'},
    { email:'melnik@comcast.net', name:'Wilma Maxwell'},
    { email:'openldap@yahoo.com', name:'Jeanne Paul'},
    { email:'errxn@mac.com', name:'Joy Martinez'},
    { email:'lstaf@gmail.com', name:'Marsha Rodriguez'},
    { email:'kidehen@msn.com', name:'Preston Hamilton'},
    { email:'kourai@live.com', name:'Earl Wilson'},
    { email:'aaribaud@gmail.com', name:'Don Mckenzie'},
    { email:'forsberg@hotmail.com', name:'Kelley Olson'},
    { email:'mbswan@mac.com', name:'Bradley Moran'},
    { email:'satishr@hotmail.com', name:'Leo Barker'}
];
const locations = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
const bagelTypes = ['everything', 'raisin', 'plain', 'onion', 'poppyseed', 'garlic', 'blueberry'];
module.exports = { users, locations, bagelTypes };
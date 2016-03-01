var bio = {
  "name": "Gabriela Lártiga",
  "role": "Web and Game developer",
  "contacts":{
    "mobile":"+56-9-6473-6379",
    "email":"gabilartiga@gmail.com",
    "github": "gabuchin",
    "twitter":"@gabydesuyo",
    "location": "Santiago, Chile"
  },
  "welcomeMsg": "Hi, welcome to my resume!",
  "skills": ["programming","drawing","teaching","randomness"],
  "bioPic": "images/profile.jpg"
};
var work = {
  "jobs":[
  {
    "position": "Software Engineer & Game Developer",
    "employer": "Adaptativamente",
    "dates": "March 2016 - Now",
    "city": "Santiago, Chile",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "position": "Game Developer",
    "employer": "Open Green Road",
    "dates": "March 2015 - June 2015",
    "city": "Santiago, Chile",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "position": "Software Engineer & Game Developer",
    "employer": "Zetapp Studios",
    "dates": "February 2015 - August 2015",
    "city": "Concepción, Chile",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "position": "Software Engineer & Game Developer Intern",
    "employer": "Amnesia Games",
    "dates": "January 2014 - March 2014",
    "city": "Santiago, Chile",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }]
};
var projects = {
  "projects":[
  {
    "title":"Joan Sword",
    "date":"February 2014",
    "description":"Developed a metroidvania alpha game presented at GDC 2014.",//, coached by Charboost University",
    "images":["images/sword1.png","images/sword2.jpg"]
  },
  {
    "title":"Virtual Reality Map Editor",
    "date":"July 2015",
    "description":"Developed a 3D map editor which was able to be travel trough using the Virtual Reality device, Oculus Rift. ",
    "images":["images/mapEditor.jpg"]
  }
  ]
};
var education = {
  "schools":[
    {
      "name":"Universidad de Concepción",
      "city": "Concepción, Chile",
      "degree":"Engineer's Degree",
      "majors": ["Computer Science"],
      "gradYear":2015,
      "url": "http://www.inf.udec.cl/"
    },
    {
      "name":"Universidad de Concepción",
      "city": "Concepción, Chile",
      "degree":"Bachelor of Science",
      "majors": ["Engineer"],
      "gradYear":2013,
      "url": "http://www.inf.udec.cl/"
    },
    {
      "name":"Liceo Mauricio Hochschild",
      "city": "Concepción, Chile",
      "degree":"Technical High School Diploma",
      "majors": ["Electronics"],
      "gradYear":2008,
      "url": "http://www.ceat.cl/"
    },
    {
      "name":"Ishida High School",
      "city": "Isehara, Japan",
      "degree":"AFS Exchange Program",
      "majors": ["Exchange Student", " Japanese"],
      "gradYear":2007,
      "url": "http://www.ishida-h.pen-kanagawa.ed.jp/"
    }
  ],
  "onlineCourses":[
  {
    "title": "Front-end Web Developer",
    "school": "Udacity",
    "dates": 2016,
    "urlSchool": "http://www.udacity.com",
    "urlCourse": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
  }
  ]
};


//Functions
bio.display = function(){
  /*Formatted Variables*/
  var fContact = [
    HTMLmobile.replace("%data%",bio.contacts.mobile),
    HTMLemail.replace("%data%", bio.contacts.email),
    HTMLgithub.replace("%data%", bio.contacts.github),
    HTMLtwitter.replace("%data%", bio.contacts.twitter),
    HTMLlocation.replace("%data%", bio.contacts.location)
  ];
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  //Contact information
  for (var i = 0; i < fContact.length; i++) {
    $("#topContacts").append(fContact[i]);
  };
  //Profile Picture
  $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
  //Welcome Message
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
  //Skills
  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(j in bio.skills){
      $("#skills").append(HTMLskills.replace("%data%", bio.skills[j]));
    }
  };
  //footer
  for (var i = 0; i < fContact.length; i++) {
  $("#footerContacts").append(fContact[i]);
};
};
work.display = function(){
  for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart); //workExperience is an "id"
  var emp_tit = HTMLworkEmployer.replace("%data%",work.jobs[job].employer) +
                HTMLworkTitle.replace("%data%",work.jobs[job].position);
  var date_city = HTMLworkDates.replace("%data%",work.jobs[job].dates) +
                HTMLworkLocation.replace("%data%",work.jobs[job].city);
  var descrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(emp_tit); //work-entry is a "class"
  $(".work-entry:last").append(date_city);
  $(".work-entry:last").append(descrip);
  }
};
projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart)
    var ftitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var fdate = HTMLprojectDates.replace("%data%",projects.projects[project].date);
    var fdesc = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var fpics = [];
    for(var img = 0; img < projects.projects[project].images.length; img++){
      fpics[img] = HTMLprojectImage.replace("%data%",projects.projects[project].images[img]);
      fpics[img] = fpics[img].replace("%title%",projects.projects[project].title);
    }
    $(".project-entry:last").append(ftitle);
    $(".project-entry:last").append(fdate);
    $(".project-entry:last").append(fdesc);
    for(var pic = 0; pic < fpics.length; pic++){
      $(".project-entry:last").append(fpics[pic]);
    }
  }
};
education.display = function(){
  for(school in education.schools){
    var fname = HTMLschoolName.replace("%data%", education.schools[school].name);
    fname = fname.replace("#", education.schools[school].url);
    var fcity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
    var fdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var fmajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var fgyear = HTMLschoolDates.replace("%data%", education.schools[school].gradYear);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(fname + fdegree);
    $(".education-entry:last").append(fgyear);
    $(".education-entry:last").append(fcity);
    $(".education-entry:last").append(fmajors);
  };
  for(course in education.onlineCourses){
    var ftitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    ftitle = ftitle.replace("#", education.onlineCourses[course].urlCourse);
    var fschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var fdate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var furl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].urlSchool);
    furl = furl.replace("#", education.onlineCourses[course].urlSchool);
    $(".education-entry:last").append(HTMLonlineClasses);
    $(".education-entry:last").append(ftitle + fschool);
    $(".education-entry:last").append(fdate);
    $(".education-entry:last").append(furl);
  }
 };

//Click locations
$(document).click(function(loc){
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});
// Locationizer... this one changes nothing
function locationizer(work_obj){
  var locations = [];
  for(job in work_obj.jobs){
    locations.push(work_obj.jobs[job].city);
  }
  return locations;
}
//Function for internationalize the name
// function inName(){
//   var name = window.name;
//   var splitName = name.split(" ");
//   var firstName = splitName[0].slice(0,1).toUpperCase() + splitName[0].substr(1).toLowerCase();
//   var lastName = splitName[1].toUpperCase();
//   var intName = firstName +" "+ lastName;
//   return intName;
// }
//what is this???
var name = $("#name").text();
//Displaying Sections
bio.display();
work.display();
projects.display();
education.display();
//Interactive Map
$("#mapDiv").append(googleMap);
//Button
//$("#main").append(internationalizeButton);

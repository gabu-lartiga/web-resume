var bio = {
    "name": "Gabriela Lártiga",
    "role": "Web and Game developer",
    "contacts": {
        "mobile": "+56-9-6473-6379",
        "email": "gabilartiga@gmail.com",
        "github": "gabuchin",
        "twitter": "@gabydesuyo",
        "location": "Santiago, Chile"
    },
    "welcomeMessage": "Hi, welcome to my resume!",
    "skills": ["programming", "drawing", "teaching", "randomness"],
    "biopic": "images/profile.jpg",
    "display": function() {
        var formattedContact = [
            HTMLmobile.replace("%data%", bio.contacts.mobile),
            HTMLemail.replace("%data%", bio.contacts.email),
            HTMLgithub.replace("%data%", bio.contacts.github),
            HTMLtwitter.replace("%data%", bio.contacts.twitter),
            HTMLlocation.replace("%data%", bio.contacts.location)
        ];
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        //Contact information
        for (var i = 0; i < formattedContact.length; i++) {
            $("#topContacts").append(formattedContact[i]);
        }
        //Profile Picture
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        //Welcome Message
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        //Skills
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill = 0; skill < bio.skills.length; skill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }
        //footer
        for (var fc = 0; fc < formattedContact.length; fc++) {
            $("#footerContacts").append(formattedContact[fc]);
        }
    }
};
var work = {
    "jobs": [{
        "employer": "Adaptativamente",
        "title": "Software Engineer & Game Developer",
        "location": "Santiago, Chile",
        "dates": "March 2016 - Now",
        "description": "Nothing yet."
    }, {
        "employer": "Zetapp Studios",
        "title": "Software Engineer & Game Developer",
        "location": "Concepción, Chile",
        "dates": "January 2015 - August 2015",
        "description": "Designed and developed a 3D Map editor interface using Unity 3D. <br>Created a save system for 3D Maps created with 3D Map editor. <br>Integrated Oculus Rift VR device with maps rendered by 3D Map editor using Unity3D and Oculus Rift library."
    }, {
        "employer": "Open Green Road",
        "title": "Game Developer",
        "location": "Santiago, Chile",
        "dates": "March 2015 - April 2015",
        "description": "Developed interactive content and educative math games in Construct2."
    }, {
        "employer": "Amnesia Games",
        "title": "Software Engineer & Game Developer Intern",
        "location": "Santiago, Chile",
        "dates": "January 2014 - March 2014",
        "description": "Designed and developed videogame for nutrition and health care education in Construct 2. <br>Developed enemies and interactive objects behaviours for metroidvania game alpha using Unity 3D."
    }],
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart); //workExperience is an "id"
            var emp_tit = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
                HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var date_city = HTMLworkDates.replace("%data%", work.jobs[job].dates) +
                HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var descrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(emp_tit); //work-entry is a "class"
            $(".work-entry:last").append(date_city);
            $(".work-entry:last").append(descrip);
        }
    }
};
var projects = {
    "projects": [{
        "title": "Joan Sword",
        "date": "February 2014",
        "description": "Developed a metroidvania alpha game presented at GDC 2014.", //, coached by Charboost University",
        "images": ["images/sword1.png", "images/sword2.jpg"]
    }, {
        "title": "Virtual Reality Map Editor",
        "date": "July 2015",
        "description": "Developed a 3D map editor which was able to be travel trough using the Virtual Reality device, Oculus Rift. ",
        "images": ["images/mapEditor.jpg", "images/placeholder.png"],

    }],
    "display": function() {
        for (var project = 0; project < projects.projects.length; project++) {
            $("#projects").append(HTMLprojectStart);
            var ftitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var fdate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
            var fdesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            var fpics = [];
            for (var img = 0; img < projects.projects[project].images.length; img++) {
                fpics[img] = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                fpics[img] = fpics[img].replace("%title%", projects.projects[project].title);
            }
            $(".project-entry:last").append(ftitle);
            $(".project-entry:last").append(fdate);
            $(".project-entry:last").append(fdesc);
            for (var pic = 0; pic < fpics.length; pic++) {
                $(".project-entry:last").append(fpics[pic]);
            }
        }
    }
};
var education = {
    "schools": [{
        "name": "Universidad de Concepción",
        "location": "Concepción, Chile",
        "degree": "Engineer",
        "majors": ["Computer Science"],
        "dates": "2015",
        "url": "http://www.inf.udec.cl/"
    }, {
        "name": "Universidad de Concepción",
        "location": "Concepción, Chile",
        "degree": "Bachelor of Science",
        "majors": ["Engineer"],
        "dates": "2013",
        "url": "http://www.inf.udec.cl/"
    }, {
        "name": "Liceo Mauricio Hochschild",
        "location": "Concepción, Chile",
        "degree": "Technical High School Diploma",
        "majors": ["Electronics"],
        "dates": "2008",
        "url": "http://www.ceat.cl/"
    }, {
        "name": "Ishida High School",
        "location": "Isehara, Japan",
        "degree": "AFS Exchange Program",
        "majors": ["Exchange Student", " Japanese"],
        "dates": "2007",
        "url": "http://www.ishida-h.pen-kanagawa.ed.jp/"
    }],
    "onlineCourses": [{
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "urlSchool": "http://www.udacity.com",
        "urlCourse": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function() {
        for (var school = 0; school < education.schools.length; school++) {
            var fname = HTMLschoolName.replace("%data%", education.schools[school].name);
            fname = fname.replace("#", education.schools[school].url);
            var fcity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var fdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var fmajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            var fgyear = HTMLschoolDates.replace("%data%", education.schools[school].dates);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(fname + fdegree);
            $(".education-entry:last").append(fgyear);
            $(".education-entry:last").append(fcity);
            $(".education-entry:last").append(fmajors);
        }
        for (var course = 0; course < education.onlineCourses.length; course++) {
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
    }
};
//Click locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
//Displaying Sections
bio.display();
work.display();
projects.display();
education.display();
//Interactive Map
$("#mapDiv").append(googleMap);
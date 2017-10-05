$(document).ready(function () {

    var contacts = ["Förnamn", "Efternamn", "PN: YYYYMMDD-XXXX", "Ålder", "Kön"];
    var obj = { Firstname: "Ann", Lastname: "Berg", SSN: "19500501-0000", Age: "28", Sex: "Female" };

    for (var i = 0; i < contacts.length; i++) {
        $("#myTableHead").append("<th>" + contacts[i] + "</th>" );

    }

    //for (i = 0; i < contacts.length; i++) {
    $("#myTableBody").append("<tr>"+"<td>" + obj.Firstname + "</td>" + "<td>" + obj.Lastname + "</td>" + "<td>" + obj.SSN + "</td>" + "<td>" + obj.Age + "</td>" + "<td>" + obj.Sex + "</td>" + "</tr>" );
    //}



$("#Add").click(function myFunction() {


    var Firstname = document.getElementById("firstname").value;
    var Lastname = document.getElementById("lastname").value;
    var SSN = document.getElementById("ssn").value;


    //var myTableBody = document.getElementById("myTableBody");//<tbody>...
    //var myRow = document.createElement("tr");//<tr>...

    //var myFirstNameTD = document.createElement("td"); //<td></td>
    //myFirstNameTD.innerHTML = Firstname;

    //var myLastNameTD = document.createElement("td"); //<td></td>
    //myLastNameTD.innerHTML = Lastname;

    //var mySSNTD = document.createElement("td"); //<td></td>
    //mySSNTD.innerHTML = SSN;

    //myTableBody.appendChild(myRow);

    //myRow.appendChild(myFirstNameTD);
    //myRow.appendChild(myLastNameTD);
    //myRow.appendChild(mySSNTD);

    //getFullYear()	Returns the year
    //getHours()	Returns the hour (from 0- 23)
    //getMilliseconds()	Returns the milliseconds (from 0- 999)
    //getMinutes()	Returns the minutes (from 0- 59)
    //getMonth()	Returns the month (from 0- 11)

    var yourDate = SSN[6] + SSN[7];
    var yourMonth = SSN[4] + SSN[5];
    var yourYear = SSN[0] + SSN[1] + SSN[2] + SSN[3];


    var dob = new Date(yourYear, yourMonth, yourDate);
    var todayDate = new Date();
    todayDate = todayDate - dob;
    todayDate = todayDate / (1000 * 60 * 60 * 24 * 365);
    todayDate = Math.floor(todayDate);
    //todayDate = Math.round(todayDate);
    //if (todayDate < Math.floor(todayDate))
    //    AGE = Math.floor(todayDate) - 1;

    ////var day = new getDate();
    ////var month = new getMonth();
    ////var year = new getFullYear();

    //else
    //    var AGE = Math.floor(todayDate);

    var AGE = todayDate;

    //var age;
    
    //age = year - yourYear;


    //var birthdayYear = year;
    //if (yourMonth > month || yourMonth === month && yourDay > day) {
    //    age--;
    //}
    //else age = year - yourYear;

    //var AGE = age;

    //var nextBirthday = birthdayYear + "-" + yourMonth + "-" + yourDay;
    //labelBirthdayDisplay.Text = nextBirthday;
    //labelAgeDisplay.Text = age.ToString();
    


    var i;
    var SEX;
    i = SSN[12];
    if (i % 2 === 0)
        SEX = "Male";
    if (i % 2 === 1)
        SEX = "Female";
    
    //if()

    $("#myTableBody").append("<tr>" + "<td>" + Firstname + "</td>" + "<td>" + Lastname + "</td>" + "<td>" + SSN + "</td>" + "<td>" + AGE + "</td>" + "<td>" + SEX + "</td>" + "</tr>");
});
});

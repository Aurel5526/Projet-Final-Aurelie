let student = [];
let allStudents=[{}];
    /*id : 1,
    nom : "Maurice cohen",
    cours: "javascript",
    tz: 3245454567,
    date: "27.08.2020"
    }];*/
let myEvent = document.querySelectorAll(".btn-lg");
let j = 0;

    
myEvent.forEach(function(el, i){

    el.addEventListener("click", function(){
        if (localStorage.getItem("etudiants")){
            allStudents = JSON.parse(localStorage.getItem("etudiants"));
            //console.log("allStudents", allStudents[allStudents.length-1].id);
            j = allStudents[allStudents.length-1].id;
        }
        else { 
            allStudents=[];
        }
    
       id= j+1;
       nom = document.getElementById("student_name").value;
       cours = document.getElementById("student_cours").value;
       tz = document.getElementById("student_tz").value;
       date = document.getElementById("student_date").value;

        student = {
            id, nom, cours, tz, date
        }
    //console.log("stud", student);
    allStudents.push(student);
    
    //console.log("etudiants1 ", allStudents);
    localStorage.setItem("etudiants", JSON.stringify(allStudents));
        alert("Etudiant bien ajouté ! ");
        
    
    window.location.href = 'https://aurel5526.github.io/ProjetFinalAurelie/listUser.html';    

    });
});

    


//console.log (newStudent);
//student.forEach(element => {

function addStudent(){
    
    let newStudent = localStorage.getItem("etudiants");
    let obj = JSON.parse(newStudent);
    //console.log("nouveau", obj);
   
    obj.forEach(function(el, j){
        //console.log("objet", el, j);
    let insert =`<tr>
              <th scope="row">${obj[j].id}</th>
              <td>${obj[j].cours}</td>
              <td>${obj[j].nom}</td>
              <td>${obj[j].tz}</td>
              <td>${obj[j].date}</td>
              <td><button type="button" class="btn btn-info" onclick="card()"> Creation de carte</button></td>
              <td><button type="button" class="btn-danger">X</button></td>
            </tr>`;

     //console.log("insert", allStudents)
    document.getElementById("usersTable").innerHTML= document.getElementById("usersTable").innerHTML + insert;
    })

        let btnDelete = document.querySelectorAll(`.btn-danger`);
        btnDelete.forEach(function(even, i){
        even.addEventListener("click", function (ev){
            if (confirm("Etes-vous sur de vouloir supprimer cet eleve?")==true){
                obj.splice(i, 1);
                localStorage.setItem("etudiants", JSON.stringify(obj));
                //console.log ("ev", allStudents, obj, obj[i].id, obj[i].nom);
                ev.target.parentNode.parentNode.remove();
                location.reload();
            }
        else{   
                return;
            }
        })
      })
   
};

function card(){
    document.querySelector(".lightBox").style.display = "flex";
};

function closeLb()  {
        document.querySelector(".lightBox").style.display = "none";
};

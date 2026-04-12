var m=true;
function showNext(){
   if(m){
      document.getElementById("name").innerHTML="Sindhu";
      document.getElementById("location").innerHTML="Maruteru, India";
      document.getElementById("photo").src="female_pic.png";
      m=false;
   }else{
      document.getElementById("name").innerHTML="Reddy";
      document.getElementById("location").innerHTML="Bhimavaram, India";
      document.getElementById("photo").src="male_pic.png";
      m=true;
   }
   document.getElementById("randomUser").style.display = "none";
   document.getElementById("placeHolder").innerHTML = "";
}
function showRandom(){
   fetch("https://randomuser.me/api/")
   .then(response => response.json())
   .then(data => {
      const user = data.results[0];
      let gender=user.gender;
      if(gender=="male"){
         document.getElementById("photo").src="male_pic.png";
      } else {
         document.getElementById("photo").src="female_pic.png";
      }
      document.getElementById("name").innerHTML=user.name.first + " " + user.name.last;
      document.getElementById("location").innerHTML=user.location.city + ", " + user.location.country;
      document.getElementById("randomUser").src=user.picture.large;
      document.getElementById("randomUser").style.display = "block";
      document.getElementById("placeHolder").innerHTML = "<h3>Random User Photo : </h3>";
   })
   .catch(error => console.error("Error fetching random user:", error));
}
   
function greet(){
alert("Hello World!");
}
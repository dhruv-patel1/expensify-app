//child removed
/* database.ref("expenses").on("child_removed", (snapshot) =>{
    console.log(snapshot.key, snapshot.val());
  })

  //child changed
  database.ref("expenses").on("child_changed", (snapshot) =>{
      console.log(snapshot.key, snapshot.val());
  })

  //child added
  //gets called for all existing children
  //and the ones that get added
  database.ref("expenses").on("child_added", (snapshot) =>{
      console.log(snapshot.key, snapshot.val());
  }) */
  
  /* database.ref("expenses").once("value").then((snapshot) =>{
        const expenses = [];

        snapshot.forEach((childSnapshot) =>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })

        console.log(expenses);
  }) */


  /* database.ref("expenses").on("value", (snapshot) =>{
    const expenses = [];

        snapshot.forEach((childSnapshot) =>{
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log(expenses);
  }) */

  database.ref("expenses").push({
      description: "Go poop",
      note: "3rd task",
      amount: 0,
      createdAt: "January 8th, 2020"
  })



  /* database.ref("notes/-M9LWTf43b3NSv8pERUE").remove(); */
  //push to populate objects onto the database

  /* database.ref("notes").push({
      title: "Course Topics",
      body: "React Native, Angular, Python"
  }); */

  

  /* database.ref().on("value", (snapshot) =>{
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
  }) */

  //fetch data from firebase a single time
  /* database.ref('location/city').once("value").then((snapshot) =>{
        const val = snapshot.val();
        console.log(val);
  }).catch((e) =>{
        console.log("Error fetching data", e)
  }) */

  //using on instead of once, we are able to get all the 
  //changes made to the database reference we're accessing
  //basically subscribing to changes being made
  /* const onValueChange = database.ref().on("value", (snapshot) =>{
    console.log(snapshot.val());
  }, (e) =>{
    console.log("Error with data fetching", e);
  });

  setTimeout(() =>{
    database.ref("age").set(29);
  }, 3500);

  setTimeout(() =>{
    database.ref().off(onValueChange);
  }, 7000);

  setTimeout(() =>{
    database.ref("age").set(30);
  }, 10500); */


  //If you don't pass anything into ref(), you're storing to the root
  //of the database
  /* database.ref().set({
      name: "Dhruv Patel",
      age: 21,
      stressLevel: 6,
      job: {
          title: "Software Dev",
          company: "Google"
      },
      location: {
          city: "Edison",
          country: "United States"
      }
  }).then(() =>{
      console.log("Data is saved!");
  }).catch((e) =>{
      console.log("This failed: ", e);
  }) */

  //update only works on the root level
  //also works with promises
  /* database.ref().update({
     stressLevel: 9,
     "job/company": "Amazon",
     "location/city": "Seattle" 
  }); */

  //database.ref().set("This is my data.")
  //Asynchronus 
/*   database.ref("age").set(27)
  database.ref("location/city").set("New York City"); */

  /* database.ref().remove().then(() =>{
      console.log("isSingle field was removed!")
  }).catch((e) =>{
      console.log("isSingle remove failed!", e)
  }) */

  //Even though set can work to remove data,
  //the remove method is much more explicit
  /* database.ref("isSingle").set(null); */
  
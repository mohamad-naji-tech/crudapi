import { MongoClient } from "mongodb";
let mongoclient;
  export async function connecttodb(uri){

try {
    mongoclient=new MongoClient(uri);
    await mongoclient.connect();
    console.log("connection available");
    return mongoclient;
} catch (error) {
    console.error("can't connect to database ");
}}


 
  export async function creatstudent(studentsobj){
    let db={}
    let mongoclient
    try {

    mongoclient=await connecttodb(process.env.db_uri);
     db=mongoclient.db("school")
    let collection=db.collection("students")
    collection.insertOne(studentsobj);
    } catch (error) {
        console.error("can't creat object because of some errors")
    }
    finally{
        //mongoclient.close();
        console.log("this code will be applied same if there is error ")
    }
   
}

export async function deleteStudents(name){
    let db={}
    let mongoclient
    try {

    mongoclient=await connecttodb(process.env.db_uri);
    db=mongoclient.db("school")
    let collection=db.collection("students")
    collection.deleteOne({name});
    } catch (error) {
        console.error("can't delete  object because of some errors")
    }
    finally{
        //mongoclient.close();
        console.log("this code will be applied same if there is error ")
    }
   
}

export async function returnallstudents(){
    let db={}
    let mongoclient
    try {

    mongoclient=await connecttodb(process.env.db_uri);
    db=mongoclient.db("school")
    let collection=db.collection("students")
    let getall= collection.find({}).toArray();
    return getall;
    } catch (error) {
        console.error("can't delete  object because of some errors")
    }
    finally{
        //mongoclient.close();
        console.log("this code will be applied same if there is error ")
    }
   
}

export async function returnOnestudents(name){
    let db={}
    let mongoclient
    try {

    mongoclient=await connecttodb(process.env.db_uri);
    db=mongoclient.db("school")
    let collection=db.collection("students")
    return collection.findOne({name});
    } catch (error) {
        console.error("can't delete  object because of some errors")
    }
    finally{
        //mongoclient.close();
        console.log("this code will be applied same if there is error ")
    }
   
}
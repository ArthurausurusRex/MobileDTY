import { Review } from './review';
import { Weather } from './weather';

export class Project {
    
    weather: Weather;
    name: String; 
    description : String;
    session :String;
    beginningDate : Date;
    endingDate : Date;
    students : String[];
   
    numberOfReviews: Number;
    reviews : Array<Review>;
    importantReviews : Array<Review>;
    constructor(){
       
    }

    setImportantReviews(importantReviews: Array<Review>){
        this.reviews = importantReviews;
        this.numberOfReviews=this.reviews.length;
    }
}
import {Review} from './review';

export class Project {
    
    weather: String;
    projectName: String;
    importantReviews : Array<Review>;
    
    constructor(weather : String, projectName : String){
        this.weather = weather;
        this.projectName = projectName;
        this.importantReviews= [];
    }

    setImportantReviews(reviews: Array<Review>){
        this.importantReviews = reviews;
    }
}
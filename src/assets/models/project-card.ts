import { Project } from './project';
import { Weather } from './weather';

export class ProjectCard{
    showReviews : boolean;
    project : Project;
    weather : Weather;

    constructor(project : Project){
        this.project=project;
        this.showReviews=false;
        this.weather = this.project.weather;
    }
}
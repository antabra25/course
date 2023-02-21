export class Course {
  title: string;
  description: string;
  rating: string;
  picture: string;

  constructor(title: string, description: string, rating: string, picture: string) {
    this.title = title
    this.description = description
    this.rating = rating
    this.picture = picture
  }
}

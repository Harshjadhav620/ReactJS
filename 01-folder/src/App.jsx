

import { Card } from "./components/Card";




function App () {
  const jobOpenings = [
  {
    brandlogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45, // dollars per hour
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 50,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Remote"
  },
  {
    brandlogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandlogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Pune, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: 48,
    location: "Remote"
  },
  {
    brandlogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "6 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "3 days ago",
    post: "JavaScript Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "10 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Remote"
  }
];


  return (
    <div className="parent">
      {jobOpenings.map(function(){

        return <Card/>
      })}
    </div>  
  );
} 

export default App; 
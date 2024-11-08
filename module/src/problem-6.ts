{
//=============== problem 6 ======================//

interface Profile {
    name:string;
    age:number;
    email:string;
}

const updateProfile = (profile: Profile, updates: Partial<Profile>) : Profile | void =>{
     return {...profile, ...updates};
}

const myProfile: Profile = {name:'Asif', age:25, email:'asif.request@gmail.com'};

const updatedProfile = updateProfile(myProfile,{name:'Ashik'});

// console.log(updatedProfile);




}
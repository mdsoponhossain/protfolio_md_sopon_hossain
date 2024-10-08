import HeadingComponent from "../../../sharedComponent/headingComponent/HeadingComponent";
import SkillCard from "../skillCard/SkillCard";

const MySkills = () => {
    const mySkillsData = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG0ydUswprJ2NL4vPb3M9fkCQVFAa1AD3Gzw&s',
            skill: 'h-full w-[80%] bg-green-600',
            name:'react'
        },
        {
            img: 'https://i.ibb.co/Hq1bbN2/html-logo-2.png',
            skill: 'h-full w-[70%] bg-green-600',
            name:'html'
        },
        {
            img: 'https://i.ibb.co/6NmJzKY/css-logo.png',
            skill: 'h-full w-[70%] bg-green-600',
            name:'css3'
        },
        {
            img: 'https://i.ibb.co/LnqQfr2/js-logo.png',
            skill: 'h-full w-[75%] bg-green-600',
            name:'javascript'
        },
        {
            img: 'https://i.ibb.co/RHJh3Nf/mongodb-icon.gif',
            skill: 'h-full w-[60%] bg-green-600',
            name:'mongoDB'
        },
        {
            img: 'https://pbs.twimg.com/profile_images/946432748276740096/0TXzZU7W_400x400.jpg',
            skill: 'h-full w-[70%] bg-green-600',
            name:'mongoose'
        },
        {
            img: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbu0MH8%2Fbtrr6zCaeV4%2FCtVRdzDWvdkPL3rNYEBK9k%2Fimg.jpg',
            skill: 'h-full w-[50%] bg-green-600',
            name:'node'
        },
        {
            img: 'https://img-c.udemycdn.com/course/480x270/3542736_21cf.jpg',
            skill: 'h-full w-[70%] bg-green-600',
            name:'tailwind css'
        },
        {
            img: 'https://www.webknowledgefree.com/wp-content/uploads/2019/10/bootstrap-5-releases-with-major-changes.jpg',
            skill: 'h-full w-[50%] bg-green-600',
            name:'bootstrap'
        },
        {
            img: 'https://mui.com/static/logo.png',
            skill: 'h-full w-[60%] bg-green-600',
            name:'material ui'
        },
        {
            img: 'https://miro.medium.com/v2/resize:fit:400/1*JktK87FL_sqDDnuxHxe6Fw.png',
            skill: 'h-full w-[60%] bg-green-600',
            name:'firebase'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nMzwva2I5vJbfyuhfQpHYgn3coR6Un6hyA&s',
            skill: 'h-full w-[50%] bg-green-600',
            name:'redux'
        }
    ]
    return (
        <div className="h-fit py-10 bg-black md:py-20 bg-opacity-70">
            <HeadingComponent text={'My Skills'}></HeadingComponent>
            <div className="max-w-[1280px] mx-auto mt-5 md:mt-10">
                <div className="grid px-2 grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-6 lg:gap-5">
                    {
                        mySkillsData?.map((skill, index) => <SkillCard key={index} skill={skill}></SkillCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default MySkills;
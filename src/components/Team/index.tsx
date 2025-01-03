import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Abdul Rahman",
    designation: "Operations Manager",
    image: "/images/team/team-1.jpg",
    facebookLink: "https://wa.me/8660509040",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Abhisheik B",
    designation: "Operations Manager",
    image: "/images/team/team-2.jpg",
    facebookLink: "https://wa.me/82174 66139",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Kaushik M",
    designation: "Marketing Manager",
    image: "/images/team/team-3.jpg",
    facebookLink: "https://wa.me/81238 53369",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Nisarga K S",
    designation: "Frontend Manager",
    image: "/images/team/team-4.JPG",
    facebookLink: "https://wa.me/9110686985",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 5,
    name: "Anushree A R",
    designation: "Accountant Manager",
    image: "/images/team/team-5.jpg",
    facebookLink: "https://wa.me/9886263110",
    twitterLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 6,
    name: "Sanjay S R",
    designation: "Backend Opeartion Lead",
    image: "/images/team/team-6.jpg",
    facebookLink: "https://wa.me/8050117904",
    twitterLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Meet our team of experts driving innovation and excellence in every project."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

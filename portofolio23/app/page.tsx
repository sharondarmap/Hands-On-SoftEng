import Image from 'next/image';

export default function Home() {
  return (
    <div className="profile-container">
      <Image src="/pasfotoktm.jpg" alt="Example Image" width={400} height={600} />
      <div className="profile-info">
        <h1>SHARON DARMA PUTRA</h1>
        <h2>Information System Student at Institut Teknologi Bandung</h2>
        
        <h2>About Me</h2>
        <p>I, Sharon, am studying at Institut Teknologi Bandung majoring in information system and technology. I am currently getting my hands on HTML and CSS.
          I am interested in becoming a Software Engineer because I believe that Software Engineers are in high demand in this period.
          Not only technology and coding related stuff, but I also have a high interest in music and have worked on several different projects.
        </p>

        <h2>Interest and Talents</h2>
        <p>I have had an interest and talent in music since I was two years old. 
          Right now, I am majoring in information systems, so I am developing my curiosity towards tech and code.
        </p>

        <h2>Projects</h2>
        <p>So far, I have only done one programming-related big project, which is my Tubes Daspro project, which I finished this year.
          I led the project, which took me and my team about 2 weeks. The project was creating a turn-based game in Python.
        </p>

        <h2>Achievements</h2>
        <ol>
          <li>3rd Place Electone Fiesta National Competition</li>
          <li>1st Place Electone Fiesta Province Competition</li>
          <li>Main Performance and Music Director in high school contemporary art performance</li>
          <li>Rohkris Leader at SMAN 48 Jakarta</li>
        </ol>

        <h2>Contacts</h2>
        <ul>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/sharon-darma-3323b02b6">Sharon Darma</a></li>
          <li>Email: sharondarmap@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

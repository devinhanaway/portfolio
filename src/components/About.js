import React, { Component } from 'react';
import '../App.css';



export default class About extends Component{
  render(){
    return(
      <div>
        <div className="container ">
          <h1 className="header">About Me</h1>
        </div>
        <div className="container center rounded_image">
            <img className="img-responsive rounded_image" src={"./devin_picture.jpg"} alt="Hello"/>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">My Values</h1>
        <ul className="text-primary">I live to learn and grow with each day, experience, and perspective. Happiness, Success, and Life is simply a choice. That choice is one we must continue to look at each day.</ul>
        </div>
        <div className="container aboutDiv">
          <h1 className="col-md-12">My Mission</h1>
        <ul className="text-primary">My mission is to understand the many perspectives of the world in order to create meaningful change through technology, design, and relationships.</ul>

    <ul className="text-primary">I hope to apply what I have learned about human-centered design, with my background in Technology, Medicine, and Enterpeneurship to solve some of the many pressing problems our world faces. </ul>
        </div>

        <div className="container aboutDiv">

          <h1 className="col-md-12">My Story</h1>
        <ul className="text-primary">My life has been a journey driven by experiences; seeking to learn and engage with the world around me.I have worked in 3 different countries, visited over 30 and driven from the Atlantic to Pacific Ocean and back. I seek experiences and perspective so that I can better understand myself and all other human alike.</ul>

      <ul className="text-primary">I attended UNC Chapel Hill for Undergraduate, studying business with a focus in entrepreneurship, technology and healthcare. After a freshman year of pre-med courses and Business pre-requisites, I spent the summer as a project manager working for an entrepreneur who ran a health clinic/software company out of Copenhagen. Through this first year of school and my experiences working for Nordic I realized that to help fix healthcare we didn't need more doctors. ( Doctors are needed and awesome ) What we need is a more human-centered and systems-based approach towards engaging with healthcare, and the many issues that exist.
</ul>

    <ul className="text-primary">
      I discovered that my impact would be through my ability to translate ideas, manage relationships, and communicate across different domains. There was no design major at UNC, but design thinking had become the mission of Judith Cone, the Vice Chancellor for Innovation. I decided that I would use the courses available and the entrepreneurial opportunities to gain the skills and experience in business, design and technology.

    </ul>

    <ul className="text-primary">I met my first co-founder and a great friend to this day, Jack Paley, during this time. We were excited and passionate about connecting the various entrepreneurial resources across UNC and ultimately across the region. We started Carolina Think as an in-person connector for the entrepreneurial resources at UNC and Across the Triangle. Carolina Think is still around today and partners with RTP startups to provide internships to Carolina Students. This was apart of a larger vision, which became my first venture  Inverge.

    While my entrepreneurial journey began far before Inverge,this was the first technology company, or product, I attepted to build and the first startup failure. The journey of navigating the technical, emotional,  politcal, and social aspects of building, and launching inverge was foundational to my entire education at UNC along with my own growth and development.I still keep the landing page of our latest version hosted, cause the values of what it stood for is something I deeply believe in. Our goal was to create a platform for communities, organizations, and individuals to find and share entrepreneur resources. This mission is something that continues to play a large narative in my current ventures and overall purspose. 

</ul>

    <ul className="text-primary">The following summer, after my sophomore year, I received an Innovation Fellowship to immerse myself in the Silicon Valley Startup Community. I worked for Galvanize as an Intern and connecting with many Bay Area thought leaders and companies. My time at Galvanize, and in the Bay Area, along with my developing understanding of building software and managing engineers, made me realize that in order to bring about the change I want to create, that I needed to more deeply learn the technical side of building technology companies.
    </ul>

    <ul className="text-primary">I came back to UNC after my sophomore year and decided that rather than switching my major to Computer Science, that I would take the 50 remaining Business and Gen-ed credits my junior year, graduate a year early, and spend the following year traveling and learning how to build software.

      The following July, I found myself submitting my last assignment for college, a paper for my online history of jazz class, from the barracks of an overnight train through Croatia. I had to take 9 hours over the summer to get the 50 hours but figured out a way to finish these hours while traveling through Europe for 4 months.

      I returned in the Fall and used the next year to develop upon my foundational understanding of building technology products.

      After returning to the states in the Fall of 2016, applied to and got accepted to the Galvanize Full Stack Web Development Immersive in Denver, Colorado. I moved out to Denver, in December, and on Feb, 14th, I started the 6 month journey to learning the more technical aspects of launching

    </ul>
        </div>
      </div>
    )
  }
}

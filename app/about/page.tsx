import React from "react";

const About = () => {
  return (
    <div className="about-section px-20 lg:px-32 xl:px-48 py-16 text-gray-800">
      <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>

      {/* Our Vision Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          Skilltreck is built on the belief that every experience is a stepping
          stone to a brighter career. Our goal is to provide students and
          early-career professionals with a seamless way to document, track, and
          showcase their growth. By simplifying the process of logging daily
          learnings, achievements, and certifications, Skilltreck is designed
          to be more than a journal—it’s a career-building platform.
        </p>
      </section>

      {/* Why Skilltreck Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Why Skilltreck?</h2>
        <p className="text-lg leading-relaxed">
          We understand that transitioning from education to a professional
          environment can be challenging. Skilltreck bridges this gap by helping
          users create a dynamic, evolving portfolio that goes beyond a standard
          resume. Our AI-based system intelligently curates relevant experiences
          and insights, allowing users to tailor resumes to specific roles and
          receive customized interview pointers.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
        <ul className="list-disc ml-8 text-lg leading-relaxed">
          <li className="mb-3">
            <strong>Daily Journal & Activity Tracker</strong>: Capture daily
            learnings, insights, and experiences as you progress through
            internships, seminars, and activities.
          </li>
          <li className="mb-3">
            <strong>AI-Powered Resume Curation</strong>: Skilltreck AI tailors
            resumes to highlight the most relevant achievements and skills based
            on the job you’re applying for, helping you stand out.
          </li>
          <li className="mb-3">
            <strong>Certificate & Achievement Management</strong>: Add
            certifications and milestones to your profile easily, keeping a
            record of every achievement in one place.
          </li>
          <li>
            <strong>Interview Preparation</strong>: Get key insights and talking
            points based on your experiences, tailored to the specific role,
            helping you prepare with confidence.
          </li>
        </ul>
      </section>

      {/* Commitment to ADTU Students Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">
          Commitment to Assam Downtown University Students
        </h2>
        <p className="text-lg leading-relaxed">
          As a project initiated by students passionate about
          empowering youth, Skilltreck is committed to supporting Assam Downtown
          University (ADTU) students. We believe in offering resources to drive
          student success, and therefore, <strong>Skilltreck is entirely free
          for all ADTU students</strong>. We aim to equip you with a competitive
          advantage as you prepare to enter the workforce.
        </p>
      </section>

      {/* Our Goal Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Goal</h2>
        <p className="text-lg leading-relaxed">
          We want Skilltreck to become a lifelong companion in your professional
          journey, helping you:
        </p>
        <ul className="list-disc ml-8 mt-2 text-lg leading-relaxed">
          <li>Easily organize and document your experiences.</li>
          <li>Receive career-specific support that enhances your profile.</li>
          <li>
            Approach job applications and interviews with tailored resources
            that set you apart.
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Join Us in Building a Stronger Future</h2>
        <p className="text-lg leading-relaxed">
          With Skilltreck, we aim to redefine career readiness, making it
          accessible and valuable for all. Whether you’re preparing for your
          first internship or your first job, Skilltreck is here to help you
          shine.
        </p>
      </section>
    </div>
  );
};

export default About;

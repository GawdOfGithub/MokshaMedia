import React from 'react';
import Card from './card';
import SectionTitle from '../Common/SectionTitle';

export default function Team() {
  return (
    <>
    <SectionTitle title='Our Team' paragraph='This is the team of professionals that will work so that you can attain Moksha' center/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-20'>
      <Card name="Arjun Paswan" position="Founder" source="/images/team/anurag.jpeg" />
      <Card name="Anurag Bhandari" position="Web Developer" source="/images/team/anurag.jpeg" />
      <Card name="Yash Gupta" position="Web Developer" source="/images/team/anurag.jpeg" />
      <Card name="Mintrie" position="Video Editor" source="/images/team/anurag.jpeg" />
      <Card name="Person 1" position="Video Editor" source="/images/team/anurag.jpeg" />
      <Card name="Person 2" position="Video Editor" source="/images/team/anurag.jpeg" />
    </div>
    </>
  );
}

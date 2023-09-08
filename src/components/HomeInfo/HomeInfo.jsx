import {
  HomeWrapper,
  HomeTitle,
  TextWrapper,
  MainPoints,
  Point,
} from './HomeInfo.styled';

export const HomeInfo = () => {
  return (
    <HomeWrapper>
      <HomeTitle>ContactsConnect</HomeTitle>
      <TextWrapper>
        <p>With "ContactsConnect," managing your contacts is a breeze:</p>
        <MainPoints>
          <Point>
            <b>Effortless Organization</b> : Categorize your contacts easily, so
            you can quickly find the right person when you need them.
          </Point>
          <Point>
            <b>Smart Search</b>: Our powerful search feature ensures speedy
            access to contact details, saving you time and effort.
          </Point>
          <Point>
            <b>Never Miss a Date</b>: Reminders keep you updated on birthdays
            and important events, so you can send your best wishes promptly.
          </Point>
          <Point>
            <b>Personalize Contacts</b>: Add notes and tags to customize your
            contacts, making it easy to remember important details.
          </Point>
          <Point>
            <b>Seamless Access</b>: Enjoy access across all your devices,
            ensuring your contacts are with you wherever you go.
          </Point>
        </MainPoints>
        <p>
          Say goodbye to contact chaos and hello to streamlined contact
          management!
        </p>
      </TextWrapper>
    </HomeWrapper>
  );
};

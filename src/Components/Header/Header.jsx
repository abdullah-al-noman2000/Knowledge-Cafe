import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
      <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
        <h3 className="text-4xl font-bold">Knowledge Cafe</h3>
        <img src={profile} alt="" />
      </header>
    );
};

export default Header;
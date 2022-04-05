import Title from "../components/title/Title";
import SocialMedia from "../components/socialmedia/SocialMedia";

export default function App() {
  return (
    <div className="absolute inset-0 m-auto w-5/12 h-2/6 animate-slidingfadein">
      <Title />
      <SocialMedia />
    </div>
  );
}

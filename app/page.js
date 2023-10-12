import Image from 'next/image'


export default function Home() {
  return <div className="w-[100%] bg-black flex flex-col">
    <div className="flex w-[900px] p-[20px] flex-col self-center">
      <div className="flex flex-row items-center">
        <div className="flex flex-col float-left">
          <div className={`text-orange text-[24px] font-bold`}>Solar Car Project</div>
          <div className="text-[16px] ">At University of the Pacific</div>
        </div>
        <div className="grow flex flex-wrap justify-end overflow-hidden">
          <HeaderButton text="About" />
          <HeaderButton text="Progress" />
          <HeaderButton text="Sponsors" />
          <HeaderButton text="Members" />
          <HeaderButton b={true} text="Sponsor us" />
        </div>
      </div>
      <Spacer />
      <div className="text-[30px] font-bold">They said we couldn't. So we did.</div>
      <img src="car.png" className="w-[100%] object-cover"></img>
      <Spacer />
      <div className="flex flex-row justify-evenly">
        <div className="flex-none flex flex-col items-center">
          <div className={`text-[72px] text-[FF5C00] font-bold text-[${orange}]`}>67</div>
          <div className="text-[24px]">Members joined</div>
        </div>
        <div className="flex-none flex flex-col items-center">
          <div className={`text-[72px] text-[FF5C00] font-bold text-[${orange}]`}>$14500</div>
          <div className="text-[24px]">Money Raised</div>
        </div>
        <div className="flex-none flex flex-col items-center">
          <div className={`text-[72px] text-[FF5C00] font-bold text-[${orange}]`}>2</div>
          <div className="text-[24px]">Competitions won</div>
        </div>
      </div>
      <Spacer />
      <Spacer />
      <p className="text-[24px]">
        <span>We started as a </span>
        <span className={`text-[${orange}]`}>group of friends </span>
        <span>passionate about making a 100% carbon emission free car and we evolved into a community. </span>
        <span className={`text-[${orange}] underline`}>Join us</span>
        <span> today and help us build the </span>
        <span className={`text-[${orange}] font-bold`}>BIGGEST </span>
        <span>project at University of the Pacific.</span>
      </p>
      <Spacer />
      <Spacer />
      <div className={`text-[28px] font-bold text-[${orange}]`}>Latest progress</div>
      <Spacer />
      <Progress photo="photo1.png" headline="Math is mathing!" date="September 9th, 2023" team="Chassis Team" text="Chassis team is once again sharing good news! The FEA has been finalised and sent for review" />
      <Spacer />
      <Progress photo="photo.png" headline="Started a fire in Baun hall..." date="September 7th, 2023" team="Electrical Team" text="Electrical team is wildin’ big time. They short circuited a bunch of batteries and started a fire..." />
      <Spacer />
      <div className={`self-center h-[40px] p-[20px] text-[${orange}] text-[24px] font-bold border-[#ff5c00] border-[4px] flex items-center justify-center rounded-md`}>Show more</div>
      <Spacer />
      <div className={`text-[28px] font-bold text-[${orange}]`}>Sponsors</div>
      <div className="text-white text-[20px]">One community. One goal.</div>
      <Spacer></Spacer>
      <div className="flex flex-wrap gap-y-[10px]">
        <Sponsor text="Tap Plastics" />
        <Sponsor text="California Welding & Supply" />
        <Sponsor text="Nunes Family" />
        <Sponsor text="Pelera Family" />
        <Sponsor text="Desai Family" />
        <Sponsor text="D. Lee Family" />
      </div>
      <Spacer></Spacer>
      <div className={`self-center h-[40px] p-[20px] text-[${orange}] text-[24px] font-bold border-[#ff5c00] border-[4px] flex items-center justify-center rounded-md`}>Sponsor us!</div>
      <Spacer />
      <div className={`text-[28px] font-bold text-[${orange}]`}>Current Members</div>
      <Spacer></Spacer>
      <div className="flex flex-wrap gap-y-[40px]">
        <Member text="Aleksei Macatuno" position="Founder & President" />
        <Member text="Ariana Desai" position="Co-Founder & VP" />
        <Member text="Simran Pravin" position="Ergonomics team lead" />
        <Member text="Zhangir Siranov" position="Chief Starlord" />
        <Member text="Zack Hearn" position="Chassis team lead" />
        <Member text="Ray Magu" position="Media team lead" />
        <Member text="Marcus Medina" position="Electrical team lead" />
        <Member text="An Pham" position="Telematics team lead" />
        <Member text="Quoc-Anh" position="Electrical team lead" />
        <Member text="Pranav Jayakumar" position="Telematics member" />
        <Member text="Miguel Recinos" position="Telematics member" />
        <Member text="Kevin Yang" position="Telematics member" />
      </div>
    </div>
  </div >;
}

function Progress(props) {
  return <div className="flex flex-row items-center">
    <div className="w-[400px] h-[300px] bg-gray-200 rounded-lg overflow-hidden">
      <img src={props.photo} className="h-[300px] w-[400px] fit-cover"></img>
    </div>
    <div className="w-[40px]"></div>
    <div className="grow flex flex-col w-[calc(100%-440px)]">
      <div className="text-[24px] font-bold text-white">{props.headline}</div>
      <div className="h-[20px]" />
      <div className="text-white/[0.7] text-[20px]">{props.text}</div>
      <div className="h-[20px]" />
      <div className="text-white/[0.5] text-[20px]">{props.date}</div>
      <div className="h-[20px]" />
      <div className="flex flex-wrap">
        <div className="h-[40px] rounded-lg pl-[20px] pr-[20px] bg-purple-500 flex justify-center items-center">{props.team}</div>
      </div>
    </div>
  </div>;
}

function Member(props) {
  return <div className="w-[calc(100%/4)] flex flex-col items-center">
    <div className="h-[150px] w-[150px] rounded-[100px] bg-gray-500"></div>
    <Spacer />
    <div className="text-[20px] font-bold">{props.text}</div>
    <div className="text-[20px]">{props.position}</div>
  </div>;
}

function Sponsor(props) {
  return <div className="w-[calc(100%/4)] h-[150px] flex items-center justify-center">
    {props.photo != null ? <img src={props.photo}></img> : <></>}
    {props.text != null ? <div className="text-white text-[24px] font-bold text-center">{props.text}</div> : <></>}
  </div>;
}

function Spacer() {
  return <div className="h-[40px]"></div>;
}

function HeaderButton(props) {
  return <div className={`h-[30px] pl-[20px] ${props.b ? "border-[3px] border-white" : ""} rounded-md pr-[20px] flex items-center text-white fontbold`}>{props.text}</div>;
}


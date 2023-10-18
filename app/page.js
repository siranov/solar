import Image from 'next/image'

const members = [
  { "name": "Aleksei Macatuno", "team": "Founder & President", "image": "https://media.licdn.com/dms/image/D5635AQHy42ES4Q2i8w/profile-framedphoto-shrink_400_400/0/1695092762584?e=1697767200&v=beta&t=3l7OfgqlQtwsdZOGvOcZY1ZKUo9Bz-4W8CssVTbh-gM" },
  { "name": "Ariana Desai", "team": "Co-Founder & VP", "image": "https://media.licdn.com/dms/image/D4E03AQFG46OLLgKcjQ/profile-displayphoto-shrink_400_400/0/1686098367230?e=1702512000&v=beta&t=T6zTaxbKKf1ixsw9uHqUjQe9BGb_EROI6OQ3xfQFhew" },
  { "name": "Simran Pravin", "team": "Officer", "image": "" },
  { "name": "Zhangir Siranov", "team": "Chief Starlord", "image": "https://media.licdn.com/dms/image/D5603AQFyx0H__BwGzA/profile-displayphoto-shrink_400_400/0/1683002213630?e=1702512000&v=beta&t=S6ly6qMuM8l6TY5S1m3WG7PxvlJhRNCG6tEAEeQH-Ck" },
  { "name": "Zack Hearn", "team": "Chassis Team Lead", "image": "https://media.licdn.com/dms/image/D5603AQF-utE6Q1niaQ/profile-displayphoto-shrink_400_400/0/1693788694172?e=1702512000&v=beta&t=A-YOBQtVKHz11eNB4H1uMHKOPDpGsul-_C2kskBycaE" },
  { "name": "Ray Magu", "team": "Media Team Lead", "image": "" },
  { "name": "Marcus Medina", "team": "Electrical Team Lead", "image": "https://media.licdn.com/dms/image/D5635AQHTdWknXgXlWA/profile-framedphoto-shrink_400_400/0/1689427703313?e=1697767200&v=beta&t=X_hdn3w7reYP1xjyqZlfpy2gitMY9SgITVhQ8Rvv-yU" },
  { "name": "An Pham", "team": "Telematics Team Lead", "image": "https://media.licdn.com/dms/image/D4D03AQGR89_NjTEAfA/profile-displayphoto-shrink_400_400/0/1694377313676?e=1702512000&v=beta&t=UBNZnSgyeuV1uBlJIbvSTMcGw2S564yzDYikQEYwFZ0" },
  { "name": "Quoc-Anh", "team": "Electrical Team Lead", "image": "https://media.licdn.com/dms/image/C5603AQGXdcMmOdJ_Zw/profile-displayphoto-shrink_400_400/0/1664087605853?e=1702512000&v=beta&t=q-J2iNhnGeT4VvDnIJkJZZPSNbdzk8opurDO0tOaUcQ" },
  { "name": "Pranav Jayakumar", "team": "Telematics member", "image": "" },
  { "name": "Miguel Recinos", "team": "Telematics member", "image": "https://media.licdn.com/dms/image/D5635AQE1ws5--hLwLQ/profile-framedphoto-shrink_400_400/0/1682245926351?e=1697767200&v=beta&t=EJIkHlbMXuWx31lzAzw_bmv8n5HsvCkPf8SFdypedSg" },
];

const progress = [
  {
    "photo": "photo1.png",
    "headline": "FEA Success",
    "date": "September 9th, 2023",
    "team": "Chassis Team",
    "text": "Chassis team is once again sharing good news! The FEA has been finalised and sent for review",
  },
  {
    "photo": "photo.png",
    "headline": "Welding the batteries ",
    "date": "September 9th, 2023",
    "team": "Electrical Team",
    "text": "Exciting news from electrical team. They spot welded batteries today!",
  },
];

export default function Home() {
  let rm = [];
  let rp = [];
  for (let i = 0; i < members.length; i++) {
    rm.push(<Member text={members[i]['name']} position={members[i]["team"]} image={members[i]["image"]}></Member>);
  }
  for (let i = 0; i < progress.length; i++) {
    rp.push(<>
      <Progress photo={progress[i]["photo"]}
        headline={progress[i]["headline"]}
        date={progress[i]["date"]}
        team={progress[i]["team"]}
        text={progress[i]["text"]} />
      <Spacer />
    </>);
  }
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
          <div className={`text-[72px] text-[FF5C00] font-bold text-orange`}>47</div>
          <div className="text-[24px]">Active members</div>
        </div>
        <div className="flex-none flex flex-col items-center">
          <div className={`text-[72px] text-[FF5C00] font-bold text-orange`}>17</div>
          <div className="text-[24px]">People supported us</div>
        </div>
        <div className="flex-none flex flex-col items-center">
          <div className={`text-[72px] text-[FF5C00] font-bold text-orange`}>1</div>
          <div className="text-[24px]">Competitions won</div>
        </div>
      </div>
      <Spacer />
      <Spacer />
      <p className="text-[24px]">
        <span>We started as a </span>
        <span className={`text-orange`}>group of friends </span>
        <span>passionate about making a 100% carbon emission free car and we evolved into a community. </span>
        <span className={`text-orange underline`}>Join us</span>
        <span> today and help us build the </span>
        <span className={`text-orange font-bold`}>BIGGEST </span>
        <span>project at University of the Pacific.</span>
      </p>
      <Spacer />
      <Spacer />
      <div className={`text-[28px] font-bold text-orange`}>Latest progress</div>
      <Spacer />
      {rp}
      <div className={`self-center h-[40px] p-[20px] text-orange text-[24px] font-bold border-[#ff5c00] border-[4px] flex items-center justify-center rounded-md`}>Show more</div>
      <Spacer />
      <div className={`text-[28px] font-bold text-orange`}>Sponsors</div>
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
      <div className={`self-center h-[40px] p-[20px] text-orange text-[24px] font-bold border-[#ff5c00] border-[4px] flex items-center justify-center rounded-md`}>Sponsor us!</div>
      <Spacer />
      <Spacer />
      <div className={`text-[28px] font-bold text-orange`}>Merch</div>
      <div className="h-[20px]"></div>
      <div className="flex flex-wrap w-[100%] gap-y-[20px]">
        {<MerchItem name="Battery Key Chain" price="1.99 $" photo="https://i.imgur.com/IqfMv6S.jpg"/>}
        {<MerchItem name="T-Shirt" price="19.99 $" photo="https://i.imgur.com/2KOSZ8v.jpg" />}
        {<MerchItem name="Stickers" price="2.99 $" photo="https://i.imgur.com/dq3zWdI.jpg"/>}
      </div>
      <Spacer/>
      <div className="self-center text-white text-[20px]">Send a message to +1 908 200 6006 to order!</div>
      <Spacer />
      <div className={`text-[28px] font-bold text-orange`}>Current Members</div>
      <Spacer></Spacer>
      { }
      <div className="flex flex-wrap gap-y-[40px]">
        {rm}
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
        <div className="h-[40px] rounded-lg pl-[20px] pr-[20px] bg-gray/[0.6] flex justify-center items-center">{props.team}</div>
      </div>
    </div>
  </div>;
}

function MerchItem(props) {
  return <div className="flex flex-col w-[50%] items-center">
    <div className="h-[300px] w-[300px] bg-gray rounded-md object-cover overflow-hidden">
      <img src={props.photo} className="h-[300px] w-[300px] object-cover"></img>
    </div>
    <div className="h-[10px]"></div>
    <div className="font-bold text-white text-[20px]">{props.name}</div>
    <div className="h-[10px]"></div>
    <div className="font-bold text-white text-[32px]">{props.price}</div>
  </div>;
}

function Member(props) {
  return <div className="w-[calc(100%/4)] flex flex-col items-center">
    <div className="h-[150px] w-[150px] rounded-[100px] bg-gray overflow-hidden">
      <img src={props.image} className="h-[150px] w-[150px]"></img>
    </div>
    <Spacer />
    <div className="text-[20px] font-bold">{props.text}</div>
    <div className="text-[20px] text-white/[0.7]">{props.position}</div>
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


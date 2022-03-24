import { useState } from "react";
import "./ResourcesPage.scss";
export default function Resources() {
  const [currentTab, setCurrentTab] = useState(1);
  const StateManage = function (TabValue) {
    setCurrentTab(TabValue);
    console.log(currentTab);
  };
  return (
    <div className="ResourcesPageWrapper">
      <div className="ResourcesPageWrapper__ContentWrapper">
        <div className="ResourcesPageWrapper__Tab">
          <button
            className={
              currentTab === 1
                ? "ResourcesPageWrapper__Tab__Btn1"
                : "ResourcesPageWrapper__Tab__Btn1 Unselected"
            }
            onClick={() => StateManage(1)}
          >
            Our Event
          </button>
          <button
            className={
              currentTab === 2
                ? "ResourcesPageWrapper__Tab__Btn1"
                : "ResourcesPageWrapper__Tab__Btn1 Unselected"
            }
            onClick={() => StateManage(2)}
          >
            The Companies
          </button>
          <button
            className={
              currentTab === 3
                ? "ResourcesPageWrapper__Tab__Btn1"
                : "ResourcesPageWrapper__Tab__Btn1 Unselected"
            }
            onClick={() => StateManage(3)}
          >
            The Heroes
          </button>
        </div>
        <div className="ResourcesPageWrapper__TabContentContainer">
          <div
            className={
              currentTab === 1
                ? "ResourcesPageWrapper__TabContentContainer__TabOneContent"
                : "ResourcesPageWrapper__TabContentContainer__TabOneContent HideContent"
            }
          >
            <h2 className="TabHeader">GAMEPLAY</h2>
            <div className="RecourceContent">
              <p className="ResourceContent__title">The Companies </p>
              <p className="ResourceContent__desc">
                so as to allow the players of the game to develop a
                cognitivenderstanding of the companies from both a fandom
                andindustry pov. this will let us create awareness and
                transparencymitigating any chances of confusion based on an
                inability tounderstand what the game situations
                insinuate/demand.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">The Heroes</p>
              <p className="ResourceContent__desc">
                so as to allow the players of the game to develop a
                cognitivenderstanding of the companies from both a fandom
                andindustry pov. this will let us create awareness and
                transparencymitigating any chances of confusion based on an
                inability tounderstand what the game situations
                insinuate/demand.
              </p>
            </div>
          </div>
          <div
            className={
              currentTab === 2
                ? "ResourcesPageWrapper__TabContentContainer__TabTwoContent"
                : "ResourcesPageWrapper__TabContentContainer__TabTwoContent HideContent"
            }
          >
            This is Companies Content
          </div>
          <div
            className={
              currentTab === 3
                ? "ResourcesPageWrapper__TabContentContainer__TabThreeContent"
                : "ResourcesPageWrapper__TabContentContainer__TabThreeContent HideContent"
            }
          >
            <h2 className="TabHeader">THE HEROES</h2>
            <div className="RecourceContent">
              <p className="ResourceContent__title">SPIDERMAN</p>
              <p className="ResourceContent__desc">
                Hailing from the spirited suburbs of New York City, Peter Parker
                is your regular boy next door. However, when crime strikes, he
                dons the classic red-blue suit and becomes the ultimate
                Spiderman who fights robbers and saves the day. Although fairly
                young and inexperienced, he is perceptive and exhibits
                unrivalled wit.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">HULK</p>
              <p className="ResourceContent__desc">
                The classic green muscular humanoid is well-built and
                practically invincible. Although he can frequently give in to
                his whims and fancies, he makes up for it with his massive
                strength.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">BLACK PANTHER</p>
              <p className="ResourceContent__desc">
                The revered protector of his kingdom, Wakanda, the Black Panther
                fearlessly navigates around challenges and learns each day. With
                a heart of innocence and purity, he is born to be a leader,
                possessing an enviable sense of acuity.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">BLACK PANTHER</p>
              <p className="ResourceContent__desc">
                The revered protector of his kingdom, Wakanda, the Black Panther
                fearlessly navigates around challenges and learns each day. With
                a heart of innocence and purity, he is born to be a leader,
                possessing an enviable sense of acuity.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">BATMAN</p>
              <p className="ResourceContent__desc">
                While Bruce Wayne is your classic wealthy playboy by day, he
                becomes an emblem for justice at night. Locking heads with
                criminals at every corner, he is ruthless and merciless. A
                tactical business tycoon, he has a way with his words.
                Additionally, he is also on a quest to network and rise up the
                ladder.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">CYBORG</p>
              <p className="ResourceContent__desc">
                An irreplaceable member of the Justice League, Cyborg is a
                staple figure of the DC comics. Although he has a long way to
                go, he is an adept negotiator and remains cool-headed in the
                face of chaos.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">KINGPIN</p>
              <p className="ResourceContent__desc">
                higher deal closing rate, technologically disabled, leadership A
                ruthless, cunning and wide bellied criminal mastermind, he may
                not have super powers like most of his foes, but he does have
                the brains to outsmart them. He has clashed with heroes,
                antiheroes, and villains alike. He does whatever it takes to
                maintain his stranglehold on the New York underground—that's why
                he's called the Kingpin.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">LEX LUTHER</p>
              <p className="ResourceContent__desc">
                manipulative, narcissist, intellectually deceptive A billionaire
                industrialist and a white-collar criminal , he has been
                envisioned as Superman's dual opposite; morally depraved and
                relying on intellect over strength. Rather than harnessing his
                genius for good, Luthor seizes power for his own benefit and is
                a threat at large.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">AMANDA WALLER</p>
              <p className="ResourceContent__desc">
                greedy, unforgiving, good relations and networking An antagonist
                and occasional ally to the superheroes of the DC Universe, her
                nickname "The Wall" vouches for how aggressive and stubborn she
                is to deal with. She formed The agency to serve as a small,
                quasi-independent branch of Task Force X. Her ruthless attitude
                made her one of the most feared and respected people in the U.S.
                Government.
              </p>
            </div>
            <div className="RecourceContent">
              <p className="ResourceContent__title">Harvey Dent/ Two Face</p>
              <p className="ResourceContent__desc">
                Manipulative, Leadership, Strategic Gotham City's amiable and
                courteous district attorney and one of Batman's strongest allies
                until he was attacked by acid, Two face was a criminal
                mastermind obsessed with duality and the number two and is one
                of Batman's greatest enemies. Dent is consumed by his fixation
                on chance, his crimes are designed to prove his diametric
                philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

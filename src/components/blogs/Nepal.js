import React from "react";
import "./Nepal.css";
import NepalCover from "../../assets/featured.jpg";
import Footer from "../Footer";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";

const Nepal = () => {
  return (
    <div className="blog">
      <div className="single-blog-container">
        <div className="blog-header-container">
          <Header category="TRAVEL" title="Nepal" cover={NepalCover} />
        </div>
        <div className="text-container">
          <p>
            It was probably the wind. When I stepped out of the Boeing 737 on
            the runways of Tribhuvan International Airport, the wind was the
            first entity that reminded me that I am, indeed, far away from the
            place I live. The wind was eerily chilly. It was probably the
            country's way of greeting us. After all, it was the very first trip,
            let alone an international one, where I did not have parental
            supervision, and boy were we ready to enjoy!
          </p>

          <p>
            The boring and tedious process of immigration (Nepali immigration
            officers are real slowpokes) gave way to the three of us finding a
            cab to our hotel. It felt like straight out of a page from{" "}
            <b>Feluda</b> - it was so surreal! It was Kathmandu, and we were so
            close to the Himalayas! A thing which I vividly remember on the
            journey back to the hotel is the lunch we had along the way. I
            remember it so well because I do not know half the stuff I had eaten
            then till date. Apparently it was traditional Nepali food.
          </p>

          <p>
            An interesting place I visited was the Garden of Dreams. A
            beautifully lit palace, with a large courtyard, a courtside cafe.
            You could choose to sit at the courtyard, alone with your thoughts
            under the faint amber lamps, or enjoy a pint of beer at the cafe, or
            even prepare a frame for your next profile picture on social media.
            Yes, the beauty of the palace makes the most novice of photographers
            shoot stunning portraits.
          </p>

          <p>
            We had a packed itinerary the following day. After breakfast, we
            hired a Suzuki sedan and set out. Of all our visits that day, the
            most noted places are the Swayambhunath Stupa (a.k.a. the Monkey
            Temple, for its sheer number of resident monkeys), the Pashupatinath
            Temple, and the Durbar Square. The Durbar Square was a peculiar
            sight - it had been rocked to its core by the 2015 earthquake, and
            what we really saw were huge scaffolded structures with
            reconstruction going ahead at full pace. The next day would be
            tiring, so we cut the day short, and spent the evening at our hotel,
            enjoying a few drinks.
          </p>

          <p>
            We made our tired and hung-over selves wake up at 5 AM the next day,
            for, we were going to Pokhara! Pokhara is a beautiful valley about
            200 kilometers west of Kathmandu. We had high hopes about Pokhara,
            but were in for a surprise.
          </p>

          <p>
            They say, the journey is better than the destination, and I believe
            the path from Kathmandu to Pokhara totally encapsulates the gist of
            the saying. Before Nepal, the only mountainous regions I had been to
            were either in my own country, or in Darjeeling, and Gangtok, India.
            I had never experienced anything of the sort in my life before. As
            soon as the bus left the outskirts of the city, the terrainous path
            stood in all its glory, carved through the majestic mountains. The
            sky was a perfect blue, it seemed that the day could only get
            better. We were accompanied by the river Trishuli over a great part
            of the journey, which had water so freakishly blue that it looked
            like something from a Nat Geo documentary. The lush greenery, the
            fresh Himalayan air, and the perfect weather - they made me feel we
            were moving through a highly detailed video game.
          </p>

          <p>
            Pokhara lived up to its expectations. It was nothing short of a
            piece of art. Our hotel was in a place called Lakeside, which, as
            you may guess, was beside a magnificent lake, named Phewa. Pokhara
            is really close to the Annapurna Range, and we could see the
            Annapurna peaks embedded in the afternoon sky. Lakeside was vibrant.
            There were more hotels and restaruants than we could count. The
            streets were extravagantly lit, and the air was filled with music
            coming from nearby bars and clubhouses.
          </p>

          <p>
            We hustled to put our clothes on and prepare ourselves for the day
            at 4 AM the next morning. Our first stop was Sarangkot, with the
            intention of watching the sun rise. The sun did not disappoint us -
            it was like every event in the trip had gone our way. The sun rising
            over the mighty Annapurna mountains was a sight to be reckoned with.
            The rising sun makes you feel inferior to the grandeur of Mother
            Nature, and I believe everyone should get to experience a sunrise at
            least once in their life.
          </p>

          <p>
            We then made our way to the Bindhyabasini Temple. The temple was a
            nice change of atmosphere from the crowded Sarangkot. It was serene.
            Our eyes ringed to the sweet tunes of the devotees offering their
            prayers to the creator. We moved on to the Rupakot resort, a
            magnanimous place for lunch. Anyone who visits Pokhara is highly
            recommended to visit Rupakot resort at least once. It serves awesome
            food at an even more awesome setting - in the clouds! The resort is
            really high up a hill, and on most days it is shrouded by a blanket
            of clouds till midday.
          </p>

          <p>
            Our next stop was the Shanti Stupa. It was the most challenging task
            of the day, for we had to climb up a hill for about twenty minutes
            to reach the Stupa. By the end, we had been drained, but the Stupa
            stood in front of us in its glory, and fatigue barely seemed an
            issue anymore. The view from the top was also drop-dead gorgeous.
          </p>

          <p>
            Fast forwarding to the evening, we hired ourselves a boat and went
            on a ride through Lake Phewa. The calm waters led us to a small
            temple right at the middle of the lake, a local attraction. We soon
            took the boat trip back to Lakeside. After a bit of walking around,
            we decided to stop at a small cafe. We had a really talented local
            band performing for us that evening. I'm not the guy who takes a lot
            of pictures, but I'm glad I took one in the cafe, for it brings back
            memories of us enjoying the rock band's rendition of Ben E. King's
            'Stand By Me' over a couple of beers and some fried fish.
          </p>

          <p>
            Our Pokhara trip ended the next day, with the three of us returning
            back to Kathmandu to catch a flight back to Dhaka the day after. We
            had spent a total of five days in Nepal, and had spent about $300
            per person on average (excluding plane fares) during our time.
            Although I was pretty hesitant and a tad bit scared before the trip,
            but now, a year and a half later, I'm glad I went, and I'm positive
            that I will be going back to Nepal for another bite. The trip made
            me realize that it is imperative to not be a frog in a well, and
            that there are countless other places around the world that I must
            go to before my time is up.
          </p>
          <div className="gallery">
            <Gallery items={12} subdir="nepal" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Nepal;

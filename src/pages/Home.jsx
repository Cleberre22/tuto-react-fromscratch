import React from "react";
import Countries from "../components/Countries";
import Menu from "../components/Menu";
import CarouBoot from "../components/CarouBoot";
import Logo from "../components/Logo";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <div>
      <Logo />
      <Countries />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h2>azerty</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur, iure dolores quo rerum commodi dolor odit ullam iusto
              itaque in nemo nostrum facere deserunt quam consectetur aperiam,
              adipisci reprehenderit temporibus fugiat nisi mollitia qui. Dolor
              eum esse consectetur nobis!
            </p>
            <Button>azzerty</Button>
          </div>
          <div className="col-lg-4">
            <h2>azerty</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur, iure dolores quo rerum commodi dolor odit ullam iusto
              itaque in nemo nostrum facere deserunt quam consectetur aperiam,
              adipisci reprehenderit temporibus fugiat nisi mollitia qui. Dolor
              eum esse consectetur nobis!
            </p>
            <Button>azzerty</Button>
          </div>
          <div className="col-lg-4">
            <h2>azerty</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              consequatur, iure dolores quo rerum commodi dolor odit ullam iusto
              itaque in nemo nostrum facere deserunt quam consectetur aperiam,
              adipisci reprehenderit temporibus fugiat nisi mollitia qui. Dolor
              eum esse consectetur nobis!
            </p>
            <Button>azzerty</Button>
          </div>
        </div>
      </div>

<div className="container my-5 d-flex zoneTest">
    <div className="justify-content-center">
        <CarouBoot />
        <div>
            <h4>azerty</h4>
            <p>azertyuio esqytjikt  yurui</p>
        </div>
    </div>
</div>

    </div>
  );
};

export default Home;

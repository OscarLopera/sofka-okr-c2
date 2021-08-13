import { UserPage } from "../../pages/administration/UserPage";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// user,
//   /*getVerticals NOVA*/ verticals,
//   loadingVerticals,
//   updateUser,

describe("test user page", () => {
  test("testing user page", () => {
    const dummyVertical = [
      {
        id: "6113506023b4da30102139d4",
        verticalname: "QA",
      },
    ];

    const dummyUser = {
      userId: "2lDqBGFz2cdw52lE7Q0hjNtbjSo2",
      userName: "Diego Urrego",
      userEmail: "diegourrg@gmail.com",
      userImage:
        "https://lh3.googleusercontent.com/a-/AOh14GjWFJkvBe8qfHPvcrU1EfdVW3lr1MCNAXXDws9ZFg=s96-c",
      userPhone: "0000000",
      firstTime: false,
      userVertical: "DEV",
      userToken:
        "ya29.a0ARrdaM_uU9mMrbFyl2FrEOv5y7KVjhdSoT81MQ5F0AkC144YzEXa9S6w3awzGkZss6Ipv1w3g9kNHW5qs3hovlANBGX-HojTQwAJpCZFa474_H4lSU2G-dkLMxXnpr80cK5OXcwmmsMKn3zA_A926zskRlGbXQ",
      userRol: "super usuario",
      error: null,
    };

    const verticals = dummyVertical;
    const loadingVerticals = jest.fn();
    const updateUser = jest.fn();
    const {} = render(
      <Router>
        <UserPage
          user={dummyUser}
          updateUser={updateUser}
          verticals={verticals}
          loadingVerticals={loadingVerticals}
        />
      </Router>
    );

    expect(loadingVerticals).toHaveBeenCalled();
  });
});

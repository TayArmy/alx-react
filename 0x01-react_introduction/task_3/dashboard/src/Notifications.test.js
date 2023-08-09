import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

/*
test that Notifications renders without crashing
verify that Notifications renders three list items
verify that Notifications renders the text Here is the list of notifications
 */

describe("Notification component tests", () => {
    let notification;
    beforeEach(() => {
        notification = shallow(<Notifications />)
    })
  it("renders Notification component without crashing", () => {
    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders correct text", () => {
    expect(notification.find("p").text()).toBe("Here is the list of notifications");
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 4227a85c87e16b80a901bdda94ee8e2ad38fee6a

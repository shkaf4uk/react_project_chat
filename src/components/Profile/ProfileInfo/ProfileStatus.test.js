import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello Max!" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello Max!");
    });

    test("will be span (not input)", () => {
        const component = create(<ProfileStatus status="Hello Max!" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });

    test("input should be null", () => {
        const component = create(<ProfileStatus status="Hello Max!" />);
        const instance = component.root;
        expect(() => {
            let input = instance.findByType("input");
        }).toThrow();
    });

    test("contains correct status", () => {
        const component = create(<ProfileStatus status="Hello Max!" />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[2]).toBe("Hello Max!");
    });

    test("input should be display editMode instead of span", () => {
        const component = create(<ProfileStatus status="Hello Max!" />);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onDoubleClick();
        let input = instance.findByType("input");
        expect(input.props.value).toBe("Hello Max!");
    });

    test("callBack should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hello Max!" updateStatus={mockCallback} />);
        const instance = component.getInstance();

        instance.deActivatedEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
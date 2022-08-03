import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { ReactNode } from "react";
import Modal from "./Modal";

export const initModalPortal = () => {
  const div = document.createElement("div");
  const body = document.querySelector("body")!;
  div.setAttribute("id", "modal");
  body.appendChild(div);
};

describe("Modal test cases", () => {
  beforeEach(() => {
    initModalPortal();
  });

  afterEach(cleanup);

  const MockModal = (props: {
    children: ReactNode;
    onOk?: () => void;
    onCancel?: () => void;
    visible?: boolean;
  }) => {
    const {
      children,
      onOk = () => {},
      onCancel = () => {},
      visible = false,
    } = props;

    return (
      <Modal
        title="Modal title"
        cancelText="Cancel"
        okText="Ok"
        onCancel={onCancel}
        onOk={onOk}
        visible={visible}
      >
        {children}
      </Modal>
    );
  };

  it("should render modal", () => {
    render(
      <MockModal visible>
        <div>Modal content</div>
      </MockModal>
    );

    const modalElement = screen.getByLabelText("modal-wrapper");
    const childrenElement = screen.getByText("Modal content");

    expect(modalElement).toBeTruthy();
    expect(childrenElement).toBeTruthy();

    expect(modalElement.classList.contains("show-modal")).toBeTruthy();
  });

  it("should not show Modal", () => {
    render(
      <MockModal visible={false}>
        <div>Modal content</div>
      </MockModal>
    );

    const modalElement = screen.getByLabelText("modal-wrapper");

    expect(modalElement.classList.contains("hide-modal")).toBeTruthy();
  });

  it("should test Modal cancel function", () => {
    let isOpen = true;

    const handleCloseModal = jest.fn(() => {
      isOpen = false;
    });

    render(
      <MockModal visible={isOpen} onCancel={handleCloseModal}>
        <div>Modal content</div>
      </MockModal>
    );

    const cancelButton = screen.getByLabelText("modal-wrapper__footer--cancel");
    fireEvent.click(cancelButton);

    expect(handleCloseModal).toHaveBeenCalledTimes(1);
    expect(isOpen).toBe(false);
  });
});

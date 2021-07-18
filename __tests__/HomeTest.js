/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header, UrlListing } from "../src/Components";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

const middlewares = []
const mockStore = configureStore(middlewares);

const addTodo = () => ({ type: 'ADD_TODO' })

it('should dispatch action', () => {

  // Initialize mockstore with empty state
  const initialState = {}
  const store = mockStore(initialState)

  // Dispatch the action
  store.dispatch(addTodo())

  // Test if your store dispatched the expected actions
  const actions = store.getActions()
  const expectedPayload = { type: 'ADD_TODO' }
  expect(actions).toEqual([expectedPayload])
})

test("Check for Getting Started Text", () => {
  const initialState = {}
  const store = mockStore(initialState);
  const { getByText } = render(<Provider store={store}> <UrlListing /></Provider>);
  expect(getByText("List of all the urls")).toBeInTheDocument();
});

it("Renders appropriately", () => {
  const initialState = {}
  const store = mockStore(initialState);
  render(<Provider store={store}> <Header /></Provider>);
  expect(
    screen.getByRole("heading", { name: "URL SHORTENER" })
  ).toBeInTheDocument();
});
import React from 'react';

const Blog = () => {
    return (
        <div className='mb-10'>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 01: What are the different ways to manage a state in a React
                        application?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>There are four main types of state you need to properly manage in
                        your React apps:
                        <br />
                        <b>1) Type – </b>Local state
                        <br />
                        <b>2) Type – </b>Global state
                        <br />
                        <b>3) Type – </b>Server state
                        <br />
                        <b>4) Type – </b>URL state
                        <br />
                        Local (UI) state – Local state is data we manage in one or another
                        component.
                        <br />
                        Global (UI) state – Global state is data we manage across multiple
                        components.
                        <br />
                        Server state – Data that comes from an external server that must be
                        integrated with our UI state.
                        <br />
                        URL state – Data that exists on our URLs, including the pathname and
                        query parameters..
                        <br /></p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 02: How does prototypical inheritance work?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p> The Prototypal Inheritance is a feature in javascript used to add
                        methods and properties in objects. It is a method by which an object
                        can inherit the properties and methods of another object.
                        Traditionally, in order to get and set the [[Prototype]] of an
                        object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>Question number 03:What is a unit test? Why should we write unit tests?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>Unit testing is a software development process in which the smallest
                        testable parts of an application, called units, are individually and
                        independently scrutinized for proper operation. This testing
                        methodology is done during the development process by the software
                        developers and sometimes QA staff. The main objective of unit
                        testing is to isolate written code to test and determine if it works
                        as intended.
                        <br />
                        The main objective of unit testing is to isolate written code to
                        test and determine if it works as intended. Unit testing is an
                        important step in the development process, because if done
                        correctly, it can help detect early flaws in code which may be more
                        difficult to find in later testing stages.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-8 md:w-3/4 md:p-10 p-3 rounded-xl  bg-lime-300'>
                <div>
                    <p>	React vs. Angular vs. Vue?</p>
                    <hr />
                </div>
                <div>
                    <h4>Answer:</h4>
                    <p>React can be used as a UI library to render elements, without
                        enforcing a specific project structure, and that’s why it’s not
                        strictly a framework. React Elements are the smallest building
                        blocks of React apps. They are more powerful than DOM elements
                        because the React DOM makes sure to update them efficiently whenever
                        something changes. Components are larger building blocks that define
                        independent and reusable pieces to be used throughout the
                        application. They accept inputs called props and produce elements
                        that are then displayed to the user. React is based on JavaScript,
                        but it’s mostly combined with JSX (JavaScript XML), a syntax
                        extension that allows you to create elements that contain HTML and
                        JavaScript at the same time.
                        <br /> <b> Vue JS-</b> <br /> The Vue.js core library focuses on the
                        View layer only. It’s called a progressive framework because you can
                        extend its functionality with official and third-party packages,
                        such as Vue Router or Vuex, to turn it into an actual framework.
                        Although Vue is not strictly associated with the MVVM
                        (Model-View-ViewModel) pattern, its design was partly inspired by
                        it. With Vue, you’ll be working mostly on the ViewModel layer, to
                        make sure that the application data is processed in a way that
                        allows the framework to render an up-to-date View. Vue’s templating
                        syntax lets you create View components, and it combines familiar
                        HTML with special directives and features. This templating syntax is
                        preferred, even though raw JavaScript and JSX are also supported.
                        <br />
                        <b> Angular JS-</b> <br />
                        AngularJS, the original framework, is an MVC
                        (Model-View-Controller)) framework. But in Angular 2, there’s no
                        strict association with MV*-patterns as it is also component-based.
                        Projects in Angular are structured into Modules, Components, and
                        Services. Each Angular application has at least one root component
                        and one root module. Each component in Angular contains a Template,
                        a Class that defines the application logic, and MetaData
                        (Decorators). The metadata for a component tells Angular where to
                        find the building blocks that it needs to create and present its
                        view.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
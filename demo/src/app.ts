// Code goes here!

console.log('howdy!');

class ProjectInput {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    formElement: HTMLElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;


    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild as HTMLFormElement; // Why is the FirstElementChild needed?
        this.formElement.id = 'user-input'; // set the ID for styling purposes

        this.titleInputElement = this.formElement.querySelector('#title')! as HTMLInputElement;
        this.descriptionInputElement = this.formElement.querySelector('#description')! as HTMLInputElement;
        this.peopleInputElement = this.formElement.querySelector('#people')! as HTMLInputElement;

        this.configure();
        this.attach();

    }

    private submitHandler(event: Event) {
        event.preventDefault();
        console.log('submitted');
        console.log(this.titleInputElement.value);
    }

    private configure() {
        console.log('configured');
        this.formElement.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach() {
        console.log('attached');
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}

const prjInput = new ProjectInput();
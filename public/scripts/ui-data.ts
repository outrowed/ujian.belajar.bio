
export interface UIData {
    course: {
        prefix: string;
        postfix: string;
        name: string;
        fullName: string;
    };
    attemptsAllowed: number;
    timeLimit: Date;
    date: {
        quizOpened: Date;
        quizClosed: Date;
        courseSubmitted: Date;
    };
    user: {
        absen: number;
        class: string;
        fullName: string;
        fullNameWithClass: string;
    }
}
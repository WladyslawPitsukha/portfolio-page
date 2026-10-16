export default function calculateYearPercentage(period: string): number {
    const datePattern = /(\d{1,2})[.-](\d{4})|present/gi;
    const dateParts: RegExpExecArray[] = [];
    let datePart: RegExpExecArray | null;

    while ((datePart = datePattern.exec(period)) !== null) {
        dateParts.push(datePart);
    }

    if (dateParts.length < 2) {
        return 0;
    }

    const parseDatePart = (match: RegExpExecArray) => {
        if (match[0].toLowerCase() === "present") {
            const now = new Date();
            return { month: now.getMonth() + 1, year: now.getFullYear() };
        }

        const month = Number(match[1]);
        const year = Number(match[2]);

        if (month < 1 || month > 12) {
            return null;
        }

        return { month, year };
    };

    const start = parseDatePart(dateParts[0]);
    const end = parseDatePart(dateParts[1]);

    if (!start || !end) {
        return 0;
    }

    if (start.year > end.year || (start.year === end.year && start.month > end.month)) {
        return 0;
    }

    const totalMonths = (end.year - start.year) * 12 + (end.month - start.month);
    const percentage = Math.min(100, (totalMonths / 12) * 100);

    return Math.round(percentage);
}
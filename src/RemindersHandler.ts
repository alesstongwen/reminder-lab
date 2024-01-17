import Reminder from "./Reminder";

/**
 * A grouping of reminders based on tag (case-insensitive)
 */
export interface RemindersGroupingByTag {
  [tag: string]: Reminder[];
}
/*
  {
      "grocery": [{"description": "buy milk", isComplete: false }],
      "study": [{"description": "buy milk", isComplete: false }],
  }
*/
/**
 * @class RemindersHandler
 * @description Represents a handler that manages a list of reminders
 */
export default class RemindersHandler {
  private _reminders: Reminder[];
  _tag: string;

  /**
   * Creates a new RemindersHandler instance with no reminders.
   */
  constructor(tag: string) {
    this._reminders = [];
    this._tag = tag;
  }

  /**
   * Returns the list of reminders added so far.
   */
  public get reminders(): Reminder[] {
    return this._reminders;
  }

  /**
   * Creates a new reminder and adds it to list of reminders.
   * @param description - The full description of reminder
   * @param tag - The keyword used to help categorize reminder
   */
  public addReminder(description: string, tag: string): void {
    const reminder = new Reminder(description, tag, false);
    this.reminders.push(reminder);
  }
  /**
   * Returns the reminder at specified index.
   * @throws ReminderError if specified index is not valid
   * @param index - The index of the reminder
   */
  public getReminder(index: number): Reminder {
    throw new Error("Not yet implemented");
  }

  /**
   * Returns true if specified index is valid, false otherwise.
   * @param index - The position of the reminder in list of reminders
   */
  public isIndexValid(index: number): boolean {
    if (this.size() === 0) return false;
    if (index < 0 || index + 1 > this.size()) return false;
    return true;
  }

  /**
   * Returns the number of reminders added so far.
   */
  public size(): number {
    return this._reminders.length;
  }

  /**
   * Modifies the description of the reminder at a specified index.
   * Silently ignores call if index is not valid.
   * @param index - The index of the reminder
   * @param description - The full description of reminder
   * @param tag - The keyword used to help categorize reminder
   */
  public modifyReminder(index: number, description: string): void {
    throw new Error("Not yet implemented");
  }

  /**
   * Toggle the completion status of the reminder at specified index.
   * Silently ignores call if index is not valid.
   * @param index - The index of the reminder
   */
  public toggleCompletion(index: number): void {
    throw new Error("Not yet implemented");
  }

  /**
   * Returns a list of reminders that match the keyword
   * All reminders with tags that match the search keyword exactly will be returned first.
   * If none exist, then all reminders with descriptions that match the search keyword (even partially)
   * are returned.
   * @param keyword - Text to search for in description and tag
   */
  public search(keyword: string): Reminder[] {
    const tagMatches = this._reminders.filter((reminder) => reminder.tag === keyword);
    if (tagMatches.length > 0) {
      return tagMatches;
    }
    const descriptionMatches = this._reminders.filter((reminder) =>
      reminder.description.toLowerCase().includes(keyword.toLowerCase()),
    );
    return descriptionMatches;
  }

  /**
   * Returns a grouping of the reminders based on tag (case-insensitive).
   */
  public groupByTag(): RemindersGroupingByTag {
    const groupings: RemindersGroupingByTag = {};
    for (const reminder of this._reminders) {
      const tag = reminder.tag;

      if (!groupings[tag]) {
        groupings[tag] = [];
      } else {
        groupings[tag].push(reminder);
      }
    }

    /* Pseudocode:
        You must group the reminders by tags. 
        So you need to take this._reminders which is currently like so:

        [{reminder1}, {reminder2}, {reminder3}, {reminder4}]
        
        And transform it into a groupings object
        like this:

        {
            "coding": [{ reminder1 }, { reminder2 }],
            "grocery": [{ reminder3 }, { reminder4 }],
        }

        */

    return groupings;
  }

  /**
   * Returns a list of reminders with tags that match the keyword exactly.
   * @param keyword - Text to search for in description and tag
   */
  private searchTags(keyword: string): Reminder[] {
    if (keyword === this._tag) {
      throw new Error("Not yet implemented");
    }
  }

  /**
   * Returns a list of reminders with descriptions that match the keyword.
   * @param keyword - Text to search for in description and tag
   */
  private searchDescriptions(keyword: string): Reminder[] {
    throw new Error("Not yet implemented");
  }
}

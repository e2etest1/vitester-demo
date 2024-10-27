import { describe, it, expect, vi, beforeEach } from 'vitest';
import { TaskScheduler, Task } from './task';

describe('TaskScheduler', () => {
  let scheduler: TaskScheduler;
  let mockExecute: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    scheduler = new TaskScheduler();
    mockExecute = vi.fn();
  });

  it('should add tasks and sort them by priority', () => {
    const task1: Task = { name: 'Task 1', priority: 1, execute: mockExecute };
    const task2: Task = { name: 'Task 2', priority: 3, execute: mockExecute };
    const task3: Task = { name: 'Task 3', priority: 2, execute: mockExecute };

    scheduler.addTask(task1);
    scheduler.addTask(task2);
    scheduler.addTask(task3);

    // Check if tasks are sorted by priority
    expect((scheduler as any).tasks).toEqual([task2, task3, task1]);
  });

  it('should execute all tasks in order of priority', () => {
    const task1: Task = { name: 'Task 1', priority: 1, execute: mockExecute };
    const task2: Task = { name: 'Task 2', priority: 3, execute: mockExecute };
    const task3: Task = { name: 'Task 3', priority: 2, execute: mockExecute };

    scheduler.addTask(task1);
    scheduler.addTask(task2);
    scheduler.addTask(task3);

    scheduler.executeAll();

    // Check if tasks are executed in correct order
    expect(mockExecute).toHaveBeenCalledTimes(3);
    expect(mockExecute.mock.calls[0][0]).toBeUndefined(); // Task 2
    expect(mockExecute.mock.calls[1][0]).toBeUndefined(); // Task 3
    expect(mockExecute.mock.calls[2][0]).toBeUndefined(); // Task 1
  });

  it('should handle executing with no tasks gracefully', () => {
    scheduler.executeAll();
    expect(mockExecute).not.toHaveBeenCalled();
  });
});

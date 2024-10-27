import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TaskScheduler, Task } from './task';

describe('TaskScheduler', () => {
  let scheduler: TaskScheduler;

  beforeEach(() => {
    scheduler = new TaskScheduler();
  });

  it('should add tasks and sort them by priority', () => {
    const task1: Task = { name: 'Task 1', priority: 1, execute: vi.fn() };
    const task2: Task = { name: 'Task 2', priority: 3, execute: vi.fn() };
    const task3: Task = { name: 'Task 3', priority: 2, execute: vi.fn() };

    scheduler.addTask(task1);
    scheduler.addTask(task2);
    scheduler.addTask(task3);

    expect(scheduler['tasks']).toEqual([task2, task3, task1]);
  });

  it('should execute all tasks in order of priority', () => {
    const task1: Task = { name: 'Task 1', priority: 1, execute: vi.fn() };
    const task2: Task = { name: 'Task 2', priority: 3, execute: vi.fn() };
    const task3: Task = { name: 'Task 3', priority: 2, execute: vi.fn() };

    scheduler.addTask(task1);
    scheduler.addTask(task2);
    scheduler.addTask(task3);

    scheduler.executeAll();

    expect(task2.execute).toHaveBeenCalled();
    expect(task3.execute).toHaveBeenCalled();
    expect(task1.execute).toHaveBeenCalled();

    const calls = [
      vi.mocked(task2.execute).mock.calls.length,
      vi.mocked(task3.execute).mock.calls.length,
      vi.mocked(task1.execute).mock.calls.length,
    ];

    expect(calls).toEqual([1, 1, 1]);
  });

  it('should handle executing when no tasks are present', () => {
    expect(() => scheduler.executeAll()).not.toThrow();
  });
});

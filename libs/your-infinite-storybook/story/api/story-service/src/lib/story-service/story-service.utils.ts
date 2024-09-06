import { areDefined } from '@your-infinite-storybook/shared/utils/is-defined';
import type { Story } from '@your-infinite-storybook/your-infinite-storybook/story/api/story-model';

export const mapStoryEntityToOpenAiInput = (createStoryInput: Story) => {
    const { title, description, lesson, setting, childName, childAge } =
        createStoryInput;

    const listener = areDefined(childName, childAge)
        ? {
              name: childName,
              age: childAge
          }
        : undefined;

    const protagonist = listener ? 'listener' : undefined;

    return {
        title,
        description,
        lesson,
        setting,
        protagonist,
        listener
    };
};

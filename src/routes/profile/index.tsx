import { component$ } from "@builder.io/qwik";
import type { Loader } from "@builder.io/qwik-city";
import { Form, routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { Button } from "~/components/elements/button";

export const useProfile: Loader<User> = routeLoader$(async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return res.json();
});

export const useProfileAction = routeAction$((profile) => {
  console.log("Action executed", profile);
  return { success: true };
});

export default component$(() => {
  const { value: profile } = useProfile();
  const action = useProfileAction();
  return (
    <div>
      <div class="space-y-10 divide-y divide-gray-500/20">
        <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold leading-7">Profile</h2>
            <p class="mt-1 text-sm leading-6 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <Form
            class="border border-gray-500/20 bg-gray-50 dark:bg-gray-900 sm:rounded-xl md:col-span-2"
            action={action}
          >
            <div class="px-4 py-6 sm:p-8">
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-4">
                  <label for="website">Website</label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    value={profile.website}
                    placeholder="www.example.com"
                  />
                </div>

                <div class="col-span-full">
                  <label for="about">About</label>
                  <div class="mt-2">
                    <textarea id="about" name="about" rows={3} />
                  </div>
                  <p class="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div class="col-span-full">
                  <label for="photo">Photo</label>
                  <div class="mt-2 flex items-center gap-x-3">
                    {/* <UserCircleIcon class="h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                    <Button type="button">Change</Button>
                    <Button var="light" type="button">
                      Change
                    </Button>
                    <Button var="outline" type="button">
                      Change
                    </Button>
                    <Button var="main" type="button">
                      Change
                    </Button>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="cover-photo">Cover photo</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed px-6 py-10">
                    <div class="text-center">
                      {/* <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                      <div class="mt-4 flex text-sm leading-6 text-gray-500">
                        <label for="file-upload">
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-500/20 px-4 py-4 sm:px-8">
              <Button type="button">Cancel</Button>
              <Button var="main" type="submit">
                Save
              </Button>
            </div>
          </Form>
        </div>

        <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
          <div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold leading-7 ">
              Personal Information
            </h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <form class="border border-gray-500/20 sm:rounded-xl md:col-span-2">
            <div class="px-4 py-6 sm:p-8">
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="first-name">First name</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="last-name">Last name</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                    />
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="email">Email address</label>
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="country">Country</label>
                  <div class="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="street-address">Street address</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2 sm:col-start-1">
                  <label for="city">City</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="region">State / Province</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                    />
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label for="postal-code">ZIP / Postal code</label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-500/20 px-4 py-4 sm:px-8">
              <Button type="button">Cancel</Button>
              <Button type="submit" var="main">
                Save
              </Button>
            </div>
          </form>
        </div>

        <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
          <div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold leading-7 ">Notifications</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>
          </div>

          <form class="border border-gray-500/20 sm:rounded-xl md:col-span-2">
            <div class="px-4 py-6 sm:p-8">
              <div class="max-w-2xl space-y-10">
                <fieldset>
                  <legend class="text-sm font-semibold leading-6 ">
                    By Email
                  </legend>
                  <div class="mt-6 space-y-6">
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input id="comments" name="comments" type="checkbox" />
                      </div>
                      <div class="text-sm leading-6">
                        <label for="comments" class="font-medium ">
                          Comments
                        </label>
                        <p class="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                        />
                      </div>
                      <div class="text-sm leading-6">
                        <label for="candidates" class="font-medium ">
                          Candidates
                        </label>
                        <p class="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div class="relative flex gap-x-3">
                      <div class="flex h-6 items-center">
                        <input id="offers" name="offers" type="checkbox" />
                      </div>
                      <div class="text-sm leading-6">
                        <label for="offers" class="font-medium ">
                          Offers
                        </label>
                        <p class="text-gray-500">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend class="text-sm font-semibold leading-6 ">
                    Push Notifications
                  </legend>
                  <p class="mt-1 text-sm leading-6 text-gray-600">
                    These are delivered via SMS to your mobile phone.
                  </p>
                  <div class="mt-6 space-y-6">
                    <div class="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                      />
                      <label for="push-everything">Everything</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                      />
                      <label for="push-email">Same as email</label>
                    </div>
                    <div class="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                      />
                      <label for="push-nothing">No push notifications</label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-500/20 px-4 py-4 sm:px-8">
              <Button type="button">Cancel</Button>
              <Button var="main" type="submit">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

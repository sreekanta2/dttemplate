/* eslint-disable no-unused-vars */
import { E164Number } from "libphonenumber-js/core";
import Image from "next/image";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Control,
  FieldError,
  useFormContext,
  UseFormSetError,
} from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Checkbox } from "./ui/checkbox";

import { avatar } from "@/config/user/user.config";
import { Upload } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
  RADIO = "radio",
  FILE_UPLOAD = "fileUpload",
}

interface CustomProps {
  control: Control<any>;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  type?: string;
  value?: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
  checked?: boolean;
  children?: React.ReactNode;
  onCheckedChange?: (name: string) => void;
  renderSkeleton?: (field: any) => React.ReactNode;
  fieldType: FormFieldType | undefined;
  setError?: UseFormSetError<any>;
  defaultValue?: string;
}

const RenderInput = ({
  field,
  props,
  fieldState,
}: {
  field: any;
  props: CustomProps;
  fieldState: { error?: FieldError };
}) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex w-full rounded-md border border-primary bg-background  ">
          {props.iconSrc && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              type={props.type || "text"}
              placeholder={props.placeholder}
              {...field}
              className={`border-0 ${
                props.disabled ? "font-medium text-default-900 " : ""
              }`}
              disabled={props.disabled}
            />
          </FormControl>
        </div>
      );
    case FormFieldType.FILE_UPLOAD:
      return (
        <FormControl>
          <div className="max-w-[150px] flex flex-col space-y-2">
            {/* Use a label to trigger the file input */}
            <label
              htmlFor={props.name}
              className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-primary rounded-md bg-background hover:bg-accent"
            >
              <Upload className="mr-2 h-4 w-4" /> Choose File
            </label>

            {/* Hidden file input */}
            <Input
              type="file"
              id={props.name}
              className="hidden "
              accept="image/png, image/jpeg, image/jpg, image/svg+xml"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                if (file.size > 1 * 1024 * 1024) {
                  props.setError?.(props.name, {
                    type: "manual",
                    message: "File size must be below 1MB",
                  });
                  return;
                }

                // Clear any previous errors
                props.setError?.(props.name, {});

                // Update the field value
                field.onChange(file);
              }}
            />

            {/* Display the selected file name and a remove button */}
            {field.value && (
              <div className="flex items-center gap-2">
                <Image
                  src={URL?.createObjectURL(field.value || avatar)} // Generate a temporary URL for the file
                  alt="Uploaded file"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <button
                  type="button"
                  onClick={() => {
                    field.onChange(null);
                    props.setError?.(props.name, {}); // Clear errors when file is removed
                  }}
                  className="text-destructive"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className=" "
            disabled={props.disabled}
          />
        </FormControl>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone  "
          />
        </FormControl>
      );
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={props.name}
              checked={props.checked}
              onCheckedChange={(isChecked) => {
                // Call parent handler to ensure only one is checked at a time
                if (props.onCheckedChange) {
                  props.onCheckedChange(props.name);
                }
                field.onChange(isChecked);
              }}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      );
    case FormFieldType.RADIO:
      return (
        <FormControl>
          <RadioGroup
            onValueChange={(value) => field.onChange(value)}
            value={field.value}
            className="  flex items-center gap-x-2 "
          >
            {props.children}
          </RadioGroup>
        </FormControl>
      );

    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-primary bg-background items-center z-[9999]">
          {props?.iconSrc && (
            <div className="ml-2 w-6 h-6">
              <props.iconSrc />
            </div>
          )}

          <FormControl>
            <ReactDatePicker
              selected={field.value}
              onChange={(
                date: Date | null,
                event?:
                  | React.MouseEvent<HTMLElement>
                  | React.KeyboardEvent<HTMLElement>
              ) => {
                field.onChange(date);
              }}
              placeholderText={props.placeholder}
              dateFormat={props.dateFormat ?? "MM/dd/yyyy"}
              wrapperClassName="date-picker   "
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        <div className="flex rounded-md      bg-background items-center z-[9999]">
          <FormControl>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value || props.placeholder}
            >
              <FormControl>
                <SelectTrigger className="">
                  <SelectValue
                    placeholder={props.defaultValue || props.placeholder}
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="  z-[9999] overflow-y-auto">
                <SelectGroup>{props.children}</SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
        </div>
      );
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props;
  const { setError, trigger } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        return (
          <FormItem className="flex-1 w-full">
            {props.fieldType !== FormFieldType.CHECKBOX && label && (
              <FormLabel className="shad-input-label">{label}</FormLabel>
            )}
            <RenderInput
              field={field}
              props={{ ...props, setError }} // Pass setError and trigger as props
              fieldState={fieldState}
            />
            {/* Display error message */}
            {fieldState.error && (
              <FormMessage className="shad-error">
                {fieldState.error.message}
              </FormMessage>
            )}
          </FormItem>
        );
      }}
    />
  );
};
export default CustomFormField;

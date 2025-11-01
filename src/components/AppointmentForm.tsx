import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, User, Mail, Phone, MessageSquare, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15),
  appointmentDate: z.string().min(1, "Please select a date"),
  treatmentType: z.string().min(1, "Please select a treatment type"),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      appointmentDate: "",
      treatmentType: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Google Form submission URL
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSctCjJD7Qacm8fV83Nmwr-2xSTp8FvTQ3sikNiGaLVHw3TZDw/formResponse";
      
      // Create form data with Google Form entry IDs
      const formData = new FormData();
      formData.append("entry.1888141725", data.fullName);
      formData.append("entry.497507668", data.email);
      formData.append("entry.772219016", data.phone);
      formData.append("entry.1251979938", data.appointmentDate);
      formData.append("entry.1784109077", data.treatmentType);
      formData.append("entry.1149361671", data.message || "");
      
      // Submit to Google Forms (no-cors mode)
      await fetch(formUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      
      toast.success("Appointment Request Sent!", {
        description: "We'll contact you shortly to confirm your appointment.",
      });
      
      form.reset();
    } catch (error) {
      toast.error("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Book An Appointment</h2>
        <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Enter your full name"
                        className="pl-10 border-input focus:border-primary"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="pl-10 border-input focus:border-primary"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="pl-10 border-input focus:border-primary"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="appointmentDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Appointment Date</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="date"
                        className="pl-10 border-input focus:border-primary"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="treatmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Treatment Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <div className="relative">
                        <Stethoscope className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                        <SelectTrigger className="pl-10 border-input focus:border-primary">
                          <SelectValue placeholder="Select treatment" />
                        </SelectTrigger>
                      </div>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cleaning">Cleaning & Whitening</SelectItem>
                      <SelectItem value="root-canal">Root Canal Treatment</SelectItem>
                      <SelectItem value="braces">Braces & Aligners</SelectItem>
                      <SelectItem value="extraction">Tooth Extraction</SelectItem>
                      <SelectItem value="cosmetic">Cosmetic Dentistry</SelectItem>
                      <SelectItem value="implants">Dental Implants</SelectItem>
                      <SelectItem value="emergency">Emergency Care</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-medium">Message / Notes (Optional)</FormLabel>
                <FormControl>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Textarea
                      placeholder="Any specific concerns or requirements..."
                      className="pl-10 min-h-[100px] border-input focus:border-primary resize-none"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg transition-all text-lg py-6"
          >
            {isSubmitting ? "Sending Request..." : "Book Appointment"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AppointmentForm;

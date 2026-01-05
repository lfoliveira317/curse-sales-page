import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Trophy } from "lucide-react";
import { curriculumData } from "@/lib/curriculum-data";

export function SyllabusModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-lg h-14">
          View Syllabus
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] bg-[#0d1117] border-white/10 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-mono text-primary">FULL_STACK_CURRICULUM</DialogTitle>
          <DialogDescription>
            Detailed breakdown of every module included in the program.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-8">
            {curriculumData.courses.map((course) => (
              <div key={course.id} className="border border-white/10 rounded-lg p-4 bg-card/30">
                <div className="flex items-start gap-4 mb-4">
                  <img src={course.thumbnail} alt={course.title} className="w-16 h-16 object-contain bg-black/50 rounded-md p-2" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                    <div className="flex gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        <BookOpen className="w-3 h-3 mr-1" /> {course.lessons.length} Lessons
                      </Badge>
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        <Trophy className="w-3 h-3 mr-1" /> {course.quizzes.length} Quiz
                      </Badge>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="lessons" className="border-white/5">
                    <AccordionTrigger className="text-sm font-mono hover:text-primary">
                      VIEW_LESSONS_AND_QUIZZES
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-4 border-l-2 border-white/5 ml-2">
                        {course.lessons.map((lesson) => (
                          <div key={lesson.id} className="flex justify-between items-center py-2 group">
                            <div>
                              <div className="font-medium text-white group-hover:text-secondary transition-colors">
                                {lesson.title}
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                {lesson.description}
                              </div>
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground whitespace-nowrap ml-4">
                              <Clock className="w-3 h-3 mr-1" /> {lesson.duration} min
                            </div>
                          </div>
                        ))}
                        
                        {course.quizzes.map((quiz) => (
                          <div key={quiz.id} className="flex justify-between items-center py-2 mt-4 bg-primary/5 rounded px-3 border border-primary/10">
                            <div className="flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-primary" />
                              <span className="font-bold text-primary text-sm">{quiz.title}</span>
                            </div>
                            <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">Assessment</Badge>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

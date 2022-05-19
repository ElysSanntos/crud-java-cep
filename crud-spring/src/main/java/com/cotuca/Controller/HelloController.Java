import org.springframework.web.bind.anotation.RestController;

@RestController
@RequestMapping("/api/hello")

@GetMapping

public class HelloController{
    public String hello(){
        return "Hello";
    }
}
